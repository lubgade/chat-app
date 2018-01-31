const expect = require('expect');

const {genrateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correctmessage object', () => {
        var from = 'Jen';
        var text = 'Hell0';

        var message = genrateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});