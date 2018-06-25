//  var obj = {
//     name: "Yankee"
//  };

//  var stringObj = JSON.stringify(obj);
//  console.log(typeof stringObj);
//  console.log(stringObj);


// var personString = '{"name":"samreen","age":22}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

//*access file system
const fs = require('fs');
//* create an object
var originalNote = {
    title: 'Some Title',
    body: 'Some Body'
};

var originalNoteString = JSON.stringify(originalNote); //*convert object to string
fs.writeFileSync('notes.json',originalNoteString); //*write that string to a system file

var noteString = fs.readFileSync('notes.json'); //*read the content of the system file
var note = JSON.parse(noteString); //*convert the string into object
console.log(typeof note); //* check the typeof note
console.log(note.title);    //*access the title attribute of the originalNote object