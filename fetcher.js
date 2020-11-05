// EXPECTED OUTPUT
//> node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html
const request = require('request');
const fs = require('fs');

const myArgs = process.argv.slice(2);
const url = myArgs[0];
const filePath = myArgs[1];

const fetcher = function(url, filePath) {
  request(url, (error, response, body) => {
    if (error) {
      throw error;
    }
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        throw error;
      }
      const size = fs.statSync(filePath)['size'];
      console.log(`Downloaded and saved ${size} bytes to ${filePath}.`);
    });
  });
};

fetcher(url, filePath);