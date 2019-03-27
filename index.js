var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
    return kittens.push(name)
}

function destructivelyApendKitten(name){
    return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
    return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
    return kittens.shift()
}

function AppendKitten(name){
    return [...kittens, name]
}

function AppendKitten(name){
    return [name, ...kittens]
}

function removeLastKitten(){
    return kittens.slice(0,kittens.length-1)
}

function removeFirstKitten(){
    return kittens.slice(1)
}