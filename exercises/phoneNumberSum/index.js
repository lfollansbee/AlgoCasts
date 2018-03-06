// --- Directions
// Return the sum of the digits of a phone number string
// --- Examples
//   sumPhones('111-111-1111') --> 10
//   sumPhones('123-123-1234') --> 22

function sumPhones(phoneStr) {
    const digitsArr = phoneStr.replace(/[^\w]/g, "").split('')
    let sum = 0

    for (let digit of digitsArr) {
        let number = parseInt(digit)
        sum = sum + number
    }
    return sum
}

module.exports = sumPhones;
