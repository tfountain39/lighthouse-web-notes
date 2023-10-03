// The `fs` (File System) module provides APIs to interact with the file system.
const fs = require('fs');

// Callbacks are functions passed as arguments, invoked to handle asynchronous operations.
const breedDetailsFromFile = function(breed, callback) {
  
  console.log('breedDetailsFromFile: Calling readFile...');
  
  // `readFile` reads the content of a file asynchronously.
  // Syntax: fs.readFile(filePath, encoding, callback);
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    
    console.log("In readFile's Callback: it has the data.");
    
    // If there is no error, invoke the callback with the data.
    if (!error) callback(data);
  });
};

// Using a callback to handle the returned data asynchronously.
breedDetailsFromFile('bombay', (bombay) => {
  console.log('Return Value: ', bombay); 
});