const sum = require('../sum')
const assert = require('assert')

describe('sum', () =>{
 it('suma numeros positivos', () => {
  assert.equal(sum(3,5), 8)
 })
 it('suma numeros negativo', () => {
   assert.equal(sum(3, -5), -2)
 })
 it('suma numeros decimales', () => {
 })
})
