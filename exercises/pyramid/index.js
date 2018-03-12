// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#' n
//   pyramid(2)
//       ' # '
//       '###' n + 1
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####' n + 2
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' n + 3

function pyramid(n) {
    const rowLength = n * 2 - 1;
    const midpoint = Math.floor((2 * n - 1) / 2)

    for (let row = 0; row < n; row++) {
        let level = "";

        for (let col = 0; col < rowLength; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += "#"
            } else {
                level += " "
            }
        }

        console.log(level)
    }
}

// function pyramid(n) {
//     const rowLength = n * 2 - 1;
//
//     for (let row = 0; row < n; row++) {
//         let level = "";
//         let spaces = n - (row + 1);
//
//         for (let col = 0; col < rowLength; col++) {
//             if (col < spaces || col >= rowLength - spaces) {
//                 level += " "
//             } else {
//                 level += "#"
//             }
//         }
//
//         console.log(level)
//     }
// }

// RECURSIVELY
// function pyramid(n, row = 0, level = "") {
//     const rowLength = n + (n - 1)
//     const spaces = n - (row + 1)
//
//     if (row === n) {
//         return
//     }
//
//     if (level.length === rowLength) {
//         console.log(level)
//         return pyramid(n, row + 1)
//     }
//
//     if (level.length < spaces || level.length >= rowLength - spaces) {
//         level += " "
//     } else {
//         level += "#"
//     }
//     return pyramid(n, row, level)
// }

module.exports = pyramid;
