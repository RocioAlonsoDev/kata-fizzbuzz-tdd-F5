const { access } = require('fs/promises');
const Fizzbuzz = require('./fizzbuzz');

describe('Toma enteros positivos y devuelve fizzbuzz si son múltiplos de 3 y 5',()=>{
    test('Si 15 es múltiplo de 3, devuelve Fizz',()=>{
        //Setup
        const calculador = new Fizzbuzz();
        let expected = 'Fizz';
        let numero = 6;

        //Act
        let result = calculador.calcularFizzbuzz(numero);

        //Compare
        expect(result).toBe(expected);

    })
    test('Si 10 es múltiplo de 5, devuelve Buzz',()=>{
        //Setup
        const calculador = new Fizzbuzz();
        let expected = 'Buzz';
        let numero = 10;

        //Act
        let result = calculador.calcularFizzbuzz(numero);

        //Compare
        expect(result).toBe(expected);
    })
    test('Si 15 es múltiplo de 5 y 3, devuelve FizzBuzz',()=>{
        //Setup
        const calculador = new Fizzbuzz();
        let expected = 'FizzBuzz';
        let numero = 15;

        //Act
        let result = calculador.calcularFizzbuzz(numero);

        //Compare
        expect(result).toBe(expected);
    })
    test('Si 7 no es múltiplo de 5 ni de 3, devuelve 7',()=>{
        //Setup
        const calculador = new Fizzbuzz();
        let expected = 7;
        let numero = 7;

        //Act
        let result = calculador.calcularFizzbuzz(numero);

        //Compare
        expect(result).toBe(expected);
    })
} )
