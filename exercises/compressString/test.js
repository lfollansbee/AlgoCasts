const strCompress = require('./index');

test('maxChar function exists', () => {
  expect(typeof strCompress).toEqual('function');
});

test('Finds the most frequently used char', () => {
  expect(strCompress('aabattttttttttt')).toEqual('a2b1a1t9t2');
  expect(strCompress('aabbcca')).toEqual('a2b2c2a1');
});

test('Works with numbers in the string', () => {
  expect(strCompress('abb11c44444d2')).toEqual('a1b212c145d121');
});

test('Works with spaces in the string', () => {
  expect(strCompress('abb b11c44444d2')).toEqual('a1b2 1b112c145d121');
});
