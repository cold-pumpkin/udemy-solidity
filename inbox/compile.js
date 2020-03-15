const path = require('path');  // to get cross platform(OS) compatibility
const fs = require('fs');
const solc = require('solc');   // import solidity compiler

// from root to target file
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol')
// to read the contents of the file
const source = fs.readFileSync(inboxPath, 'utf8');

// call solidity compiler 
// speicify the number of different contracts to compile
//console.log(solc.compile(source, 1)); // check output object in the terminal

module.exports = solc.compile(source, 1).contracts[':Inbox'];
