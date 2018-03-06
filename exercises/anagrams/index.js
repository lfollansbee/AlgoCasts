// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// SOLUTION #2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

const cleanString = string => {
    return string.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

// // SOLUTION #1
// function anagrams(stringA, stringB) {
//     let charMapA = buildCharMap(stringA)
//     let charMapB = buildCharMap(stringB)
//
//     if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
//         for (let key in charMapA) {
//             if (charMapA[key] !== charMapB[key]) {
//                 return false;
//             }
//             return true;
//         }
//     }
//     return false;
// }
//
// const buildCharMap = (string) => {
//     const newString = string.replace(/[^\w]/g, "").toLowerCase();
//     let charMap = {};
//
//     for (let char of newString) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

module.exports = anagrams;
