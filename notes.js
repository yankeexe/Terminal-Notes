    console.log('Starting notes.js!!');
    const fs = require('fs');

    //saves the file to add new entry every time, fs.appendFileSync can be used too.
    var fetchNotes = () => {
        try {
            var notesString = fs.readFileSync('notes_data.json');
            return JSON.parse(notesString);
        } catch (e) {
            return [];
        };
    };

    var saveNotes = (notes) =>{
        fs.writeFileSync('notes_data.json', JSON.stringify(notes));
    };

//**************************************************************************************************** */

    var addNote = (title, body) => {
        var notes = fetchNotes();
        var note = {
            title,
            body
        };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }

    };

    var getAll = () => {
        console.log('Getting all notes');
        return fetchNotes();
    };

    var getNote = (title) => {
        var notes =  fetchNotes();
        var filteredNotes = notes.filter((note) => note.title === title);
        return filteredNotes[0];
    };


    /** logic Behind Remove Notes
     * we first save all the notes of our file on a variable with fetchNotes();
     * then we filter all the fetched notes in such a way that only the title we have mentioned doesn't get into the filtered variable
     * then we save that variable with saveNotes, meaning, all the notes will get saved apart from the one that we have mentioned. 
     */
    var removeNote = (title) => {
        var notes = fetchNotes();
        var filteredNotes = notes.filter((note) => note.title !== title);
        saveNotes(filteredNotes);
        return notes.length !== filteredNotes.length
    };

    var logNote = (note) => {
        console.log('--------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }

    module.exports = {
        addNote,
        getAll,
        getNote,
        removeNote,
        logNote
    };