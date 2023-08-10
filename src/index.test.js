// const stringReverse = require('./index.js');
//
// test("stringReverse '12345' to equal '54321'", () => {
//         expect(stringReverse('12345')).toBe('54321');
//  });

const stringReverse = require('./index.js');

describe("test reverse string", () => {
    it("stringReverse 'abcd' to equal 'dcba'", () => {
        expect(stringReverse('abcd')).toBe('dcba');
    });
    it("stringReverse '12345' to equal '54321'", () => {
        expect(stringReverse('12345')).toBe('54321');
    });
})
