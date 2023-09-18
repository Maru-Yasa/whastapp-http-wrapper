const axios = require("axios");
const fs = require('fs');

const getToken = () => { 
  axios.post(`http://localhost:5000/getToken`).then((response) => {
    const receivedToken = response.data.token;
    console.log('Token yang diterima:', receivedToken);   
})
  .catch((error) => {
    console.error('Gagal meminta token:', error);
})}

module.exports = getToken