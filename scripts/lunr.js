const fs = require('fs');
const path = require('path');

fs.copyFile(
  path.resolve(__dirname, '..', 'node_modules/@eastuni/lunr-languages-ko/lunr.ko.js'),
  path.resolve(__dirname, '..', 'node_modules/lunr-languages/lunr.ko.js'),
  (error) => {
    if (error) {
      console.error(error);
    }
  }
);

