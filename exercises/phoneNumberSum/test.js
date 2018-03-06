const sumPhones = require('./index.js');

test('sumPhones function exists', () => {
  expect(typeof sumPhones).toEqual('function');
});

test('"111-111-1111" has a sum of 10', () => {
  expect(sumPhones('111-111-1111')).toEqual(10);
});

test('"123-123-1234" has a sum of 10', () => {
    expect(sumPhones('123-123-1234')).toEqual(22);
});

test('"555-555-5555"', () => {
    expect(sumPhones('555-555-5555')).toEqual(50);
});
//
// test('"Inaccurate phone number" is returned when given an inaccurate format', () => {
//   expect(
//       expect(sumPhones('12-123-1234')).toEqual('Inaccurate phone number'));
// });
