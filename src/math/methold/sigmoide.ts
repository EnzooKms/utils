export function sigmoide(x: number): number {
    return 1 / 1 + Math.exp(-x)
}

Math.sigmoide = sigmoide