const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correctmessage object', () => {
        var from = 'Jen';
        var text = 'Hell0';

        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Frank';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        
        var message = generateLocationMessage(from, latitude, longitude);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    })
});