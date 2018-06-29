console.log("App.js is running!!");

const fs = require('fs');
const _ = require('lodash');
const notes = require('./notes.js');
const yargs = require('yargs');

var titleOptions = {
    describe: 'Title of the note',
    demand: true, //demand whether title is required or not.  
    alias: 't' //instead of typing --title, you can just type -t for title.
}

var bodyOptions = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    //what commands are available in our app and what do they do and if they are required is mentioned with .command
    .command('add', 'Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all the notes')
    .command('read','Note that user wants to read',{
        title: titleOptions
    })
    .command('delete','Deletes a note',{
        title: titleOptions
    })
    .help() //shows help menu for the user with the information we have provided above. 
    .argv


var command = argv._[0];
// console.log('Command:', command);
// console.log('Yargs:', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
   var allNotes = notes.getAll();
   console.log(`Printing ${allNotes.length} note(s).`);
   allNotes.forEach((note) => 
    notes.logNote(note)
   );
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'delete') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}
else {
    console.log('command not recognized!');
}
