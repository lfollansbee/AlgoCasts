// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// RECURSIVELY:
function steps(n, row = 0, stair = '') {
    if (row === n) {
        return
    }

    if (stair.length === n) {
        console.log(stair)
        return steps(n, row + 1)
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }
    return steps(n, row, stair)
}

// function steps(n) {
//     for (let row = 0; row < n; row++) { // from 0 to n, iterate through rows
//         let string = ''
//
//         for (let column = 0; column < n; column++) { // from 0 to n, iterate through columns
//             if (column <= row) { // if the current column <= the current row
//                 string += '#'
//             } else {
//                 string += ' '
//             }
//         }
//         console.log(string)
//     }
// }

module.exports = steps;
