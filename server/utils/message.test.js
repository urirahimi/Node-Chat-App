var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = "hello message"
        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBeA(typeof number);
        expect(message).toInclude({
            from,
            text
        })
        
    })

})