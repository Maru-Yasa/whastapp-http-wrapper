require('dotenv').config()

module.exports = {
    PORT: process.env.PORT | 3000,
    WEB_HOOK: process.env.WEB_HOOK
}