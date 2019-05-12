const fs = require('fs'); 
const chalk=require('chalk');
const notefile='notes.json';

// ADD NOTES
const addNote =(title, body)=> {
    const notes= loadNotes();
    const duplicateNote = notes.find((note)=> note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added'));

    } else {
        console.log(chalk.red.inverse('Note title taken, please try with a new title'));

    }
}

const saveNotes= (notes)=>{
    const dataJSON = JSON.stringify(notes, null, 2);
    fs.writeFileSync(notefile, dataJSON);
}

const loadNotes = ()=>{
    try {
        const readfileData = fs.readFileSync(notefile);
        const dataJSON= readfileData.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}


// REMOVE NOTES
const removeNote = (titleremove)=>{
    
    const notes= loadNotes();
    const notesToKeep=notes.filter( (note)=> note.title !== titleremove );

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note with title "'+titleremove+'" Removed!'));
    } else {
        console.log(chalk.red.inverse('No such note found with title: "'+ titleremove +'"' ));
    }    

}


// LIST NOTES
const listNote = ()=>{
    const notes= loadNotes();
    notes.forEach((note)=> console.log('Title: '+note.title+'\nBody: '+note.body))
}


// READ A NOTE
const readNote = (title)=>{
    const notes= loadNotes();
    const readNote = notes.find((note)=> note.title === title);

    if(readNote){
        console.log('Title: '+readNote.title+ '\nBody: '+readNote.body);
    } else {
        console.log(chalk.red.inverse('No such note with Title: '+title))
    }

}


module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}