const group = require('./')

const a = [ 1, 2, 3, 4, 5, ]
const b = [ 4, 5, 6, 7, 8, ]
const c = [ 9, 10, 0, 2, ]

console.log('União:', group.union(a, b, c))

console.log('Intercessão:', group.intersection(a, b, c))

console.log('Diferença:', group.difference(a, b, c))