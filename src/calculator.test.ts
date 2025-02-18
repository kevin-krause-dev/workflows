import { add, divide, multiply, subtract } from './calculator'

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
