const axios = require('axios');

// Replace with the actual API endpoint URL you want to access
const url = 'https://api.fillout.com/';

// Optional: Define any additional configuration for the request, like headers
const config = {
  headers: {
    'Authorization': 'sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912' // Replace with your actual API key if needed
  }
};


//cLZojxk94ous
// Make the GET request using axios
axios.get(url, config)
  .then(response => {
    // Handle successful response
    console.log(response.data); // This will contain the data returned by the API
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });