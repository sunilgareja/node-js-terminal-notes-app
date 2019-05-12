# node-js-terminal-notes-app
My First Node Js App. Simple CRUD using Node Js File System to create a JSON file which will contain notes you create using the terminal

To install: 
1. Make sure you have NodeJs installed on your computer.
2. Download as zip or clone this git repository to your device.
3. Once the file is downloaded, open with your code editor, and using the terminal first run the following command: npm install 

That is all 3 easy steps. The commands of this app are as follows (using terminal):

<b>Add a new note</b> 
- `node app.js add --title="insert title here" --body="insert message here"`
>You must provide a title and body in the format shown below and once the note is created you will get a success message. Each title must be unique, if not you will get a user frienly message in the terminal.

<b>Remove a note</b> 
- `node app.js remove --title="insert title you wish to remove here"`
>You must provide a title for the note which you wish to remove. If a typo is made  or no such note with that given title exists you will get a user friendly message in the terminal.

<b>Read a note</b> 
- `node app.js read --title="insert title you wish to read here"`
>You must provide a title for the note which you wish to read. If a typo is made  or no such note with that given title exists you will get a user friendly message in the terminal.

<b>List all notes</b> 
- `node app.js list`
