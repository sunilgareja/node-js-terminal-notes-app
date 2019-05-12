const yargv=require('yargs');
const notes=require('./notes.js')

// add note command
yargv.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption:true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption:true,
            type: "string"
        }
    },
    handler: (argv)=>{
        notes.addNote(argv.title, argv.body)
    }
});

// remove note command
yargv.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption:true,
            type: "string"
        }
    },
    handler: (argv)=>{
        notes.removeNote(argv.title)
    }
});

// list all notes command
yargv.command({
    command: "list",
    describe: "List all notes",
    handler: ()=>{
        notes.listNote()
    }
});

// read a note command
yargv.command({
    command: "read",
    describe: "Display a note",
    builder: {
        title:{
            describe: "Note title",
            demandOption:true,
            type: "string"
        }
    },
    handler: (argv)=>{
        notes.readNote(argv.title)
    }
});

yargv.parse();
// console.log(yargv.argv)
