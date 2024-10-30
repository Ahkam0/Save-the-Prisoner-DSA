function SaveThePrisoner(n: number, m: number, s: number): number {
    // Write your code here'
    let t: number = ((s - 1) + m)
    let rem: number = (t % n)
    return rem === 0 ? n : (rem)
}
