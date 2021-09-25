import keys from './secretKeys.js';
  
const api = keys.apiKey;

// Creating the script tag.

const script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + api;
script.defer= true;

// Appending the 'script' element to 'head'.
document.head.appendChild(script);


