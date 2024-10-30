function saveThePrisoner(n, m, s) {
    // Write your code here'
    let t = ((s - 1) + m)
    let rem = (t % n)
    return rem === 0 ? n : (rem)
}
