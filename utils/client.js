const { consola } = require('consola');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth(),
})

client.initialize()

client.on('authenticated', (session) => {
    consola.info('authenticated')
});

client.on('loading_screen', (percent, message) => {
    consola.info(percent, message);
})

client.on('ready', () => {
    consola.info('Client is ready!');
});
 
module.exports = {
    Client: client
}