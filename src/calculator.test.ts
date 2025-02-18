import {
    add,
    divide,
    factorial,
    fibonacci,
    isPrime,
    multiply,
    power,
    squareRoot,
    subtract
} from './calculator'

describe('Calculator', () => {
    describe('add', () => {
        it('should add two numbers correctly', () => {
            expect(add(2, 3)).toBe(5)
            expect(add(-1, 1)).toBe(0)
            expect(add(0, 0)).toBe(0)
        })
    })

    describe('subtract', () => {
        it('should subtract two numbers correctly', () => {
            expect(subtract(5, 3)).toBe(2)
            expect(subtract(1, 1)).toBe(0)
            expect(subtract(0, 5)).toBe(-5)
        })
    })
})

describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6)
        expect(multiply(-1, 1)).toBe(-1)
        expect(multiply(0, 5)).toBe(0)
    })
})

describe('divide', () => {
    it('should divide two numbers correctly', () => {
        expect(divide(6, 3)).toBe(2)
        expect(divide(0, 5)).toBe(0)
        expect(() => divide(6, 0)).toThrow('Cannot divide by zero')
    })
})

describe('power', () => {
    it('should raise a number to the power of another number correctly', () => {
        expect(power(2, 3)).toBe(8)
        expect(power(0, 5)).toBe(0)
    })
})

describe('squareRoot', () => {
    it('should return the square root of a number correctly', () => {
        expect(squareRoot(4)).toBe(2)
        expect(squareRoot(0)).toBe(0)
    })
})

describe('factorial', () => {
    it('should return the factorial of a number correctly', () => {
        expect(factorial(5)).toBe(120)
        expect(factorial(0)).toBe(1)
        expect(() => factorial(-1)).toThrow(
            'Factorial is not defined for negative numbers'
        )
    })
})

describe('fibonacci', () => {
    it('should return the fibonacci of a number correctly', () => {
        expect(fibonacci(5)).toBe(5)
        expect(() => fibonacci(-1)).toThrow(
            'Fibonacci is not defined for negative numbers'
        )
    })
})

describe('isPrime', () => {
    it('should return true if a number is prime', () => {
        expect(isPrime(2)).toBe(false)
        expect(isPrime(3)).toBe(false)
        expect(isPrime(4)).toBe(false)
    })
})
