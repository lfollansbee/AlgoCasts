// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// THEIR SOLUTIONS
function capitalize(str) {
    let result = str[0].toUpperCase()

    for (let i=1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}

// function capitalize(str) {
//     const words = []
//     for (let word of str.split(' ')) {
//         words.push(word[0].toUpperCase() + word.slice(1))
//     }
//
//     return words.join(' ')
// }

// MY SOLUTIONS:
// function capitalize(str) {
//     const splitStr = str.split(' ')
//     return splitStr.map(word => {
//         return word[0].toUpperCase() + (word.slice(1))
//     }).join(' ')
// }

// function capitalize(str) {
//     const splitStr = str.split(' ')
//     const upperCaseSplit = splitStr.map(word => {
//         let splitWord = word.split('')
//         splitWord[0] = splitWord[0].toUpperCase()
//         return splitWord.join('')
//     })
//     return upperCaseSplit.join(' ')
// }

module.exports = capitalize;