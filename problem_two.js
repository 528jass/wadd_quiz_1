function cappitalizeOne (arg) {
    const occurances = {}
    let argArray = arg.split('')
    let result = ''
    for (let alphabet of argArray) {
        occurances[alphabet] = occurances[alphabet] +1 || 1
    }
    
    for (let i = 0; i < arg.length; i++) {
        if (occurances[arg[i]] === 1) {
            result += arg[i].toUpperCase()
        } else {
            result += arg[i]
        }
    }
    return result
}
console.log(cappitalizeOne('jasveer'))