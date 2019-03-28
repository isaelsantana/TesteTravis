var assert = require('chai').assert;
var {
    soma
} = require('./index');

describe('Teste', () => {
    describe('Soma de 2', () => {
        it('Resultado da soma igual 2 ', () => {
            assert.equal(2, soma(1, 2))
        })
    })
});