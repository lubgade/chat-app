const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var bool = isRealString(34);
        expect(bool).toBeFalsy();
    });

    it('should reject string with only spaces', () => {
        var res = isRealString('    ');

        expect(res).toBeFalsy();
    });

    it('should allow string with non-space characters', () => {
        var res = isRealString('   Mike  ');

        expect(res).toBeTruthy();
    })
});