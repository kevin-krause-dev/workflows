export function add(a: number, b: number): number {
    return a + b
}

export function subtract(a: number, b: number): number {
    return a - b
}

export function multiply(a: number, b: number): number {
    return a * b
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Cannot divide by zero')
    }
    return a / b
}

export function power(a: number, b: number): number {
    return Math.pow(a, b)
}

export function squareRoot(a: number): number {
    return Math.sqrt(a)
}

export function factorial(a: number): number {
    if (a < 0) {
        throw new Error('Factorial is not defined for negative numbers')
    }
    return a === 0 ? 1 : a * factorial(a - 1)
}

export function fibonacci(a: number): number {
    if (a < 0) {
        throw new Error('Fibonacci is not defined for negative numbers')
    }
    return a === 0 ? 0 : a === 1 ? 1 : fibonacci(a - 1) + fibonacci(a - 2)
}

export function isPrime(a: number): boolean {
    if (a <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return false
        }
    }
    return true
}
