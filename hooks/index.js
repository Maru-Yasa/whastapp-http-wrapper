const messageHook = require("./message");

module.exports = {
    hooks: () => {
        messageHook()
    }
}