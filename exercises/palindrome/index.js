// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindgirome("abcdefg") === false

function palindrome(str) {
    // not ideal, but gives you something to talk about because you're looping even after you've compared
    //characters after middle
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

module.exports = palindrome;

// let reversed = str.split('').reverse().join('');
// return reversed === str;