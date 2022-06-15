const assert = require('assert');
const message = require('../utils');
describe('Message Test', () => {
 it('Welcome Message', () => {
        assert.strictEqual(message.getWelcomeMessage(), "server starting on ");
    });
});