const { consola } = require("consola");
const { WEB_HOOK } = require("../config");
const { Client } = require("../utils/client");
const { default: axios, AxiosError } = require("axios");
function messageHook() {
    Client.on('message', async (_message) => {
        try {          
            const _response = await axios.post('http://localhost:5000/hooks', {
                body: _message
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.info(`webhook sended with [${_response.status}] code`)
        } catch (error) {
            if (error instanceof AxiosError) {                
                consola.error(`webhook sended with error [${error.code}] code`)
            }
        }
    })
}
module.exports = messageHook