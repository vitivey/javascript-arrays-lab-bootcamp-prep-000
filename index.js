// Add your functions and code here
<<<<<<< HEAD
var kittens= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}
 function prependKitten(name){
   return [name, ...kittens]
 }
 
function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}
 
=======
var kitten= ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kitten.push(name);
  return kitten
}

function destructivelyPrependKitten(name){
  kitten.unshift(name)
  return kitten
}

function destructivelyRemoveLastKitten(){
  return kitten.slice(0, kitten.length - 1)
}

function destructivelyRemoveFirstKitten(){
  return kitten.slice(1, kitten.length - 1)
}
>>>>>>> dc53deca5a821eecc09e03b1b1ba52e0021d4341
