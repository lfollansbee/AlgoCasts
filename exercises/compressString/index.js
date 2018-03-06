// --- Directions
// Given a string, return a compressed version of the string
// with the number of occurences each character has, but only
// up to 9 times and then start over
// --- Examples
// maxChar("abcccccccd") === "a1b1c7d1"
// maxChar("aabattttttttttt") === "a2b1a1t9t2"
// because 't' occurred more than 9 times, we started over
// instead of saying 't11', we said 't9t2'

// function strCompress(str) {
//     let compressedStr = '';
//     let count = 1;
//
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//
//             if (count === 9) {
//                 compressedStr = compressedStr + str[i] + count;
//                 count = 0
//             }
//         } else {
//             compressedStr = compressedStr + str[i] + count;
//             count = 1
//         }
//     }
//     return compressedStr
// }

function strCompress(str) {

}

module.exports = strCompress;
