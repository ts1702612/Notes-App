 const fs=require('fs')
 const chalk= require('chalk')
// fs.writeFileSync('notes.txt',"This is the text from demo-fs module.")

// fs.appendFileSync('notes.txt', "Hi from Taruna Agrawal!!"




//listing section
const getNotes=()=>{
    

    const notes=loadnotes()
    if(notes.length>0)
    {
    console.log(chalk.bgCyan.black("Your Notes are..."))
    notes.forEach((note)=>
    {
        console.log(note.title)
    })
    }
    else
    {
    console.log(chalk.bgYellow.black("NO  NOTES PRESENT!"))
    }
}

// for adding
const addNote= (Title, Body)=>{
    const notes=loadnotes()  // notes is array of object

    let isPresent=false;
    for(let i=0;i<notes.length;i++){
     if(notes[i].title===Title)
      {
          isPresent=true;
          break
      }
    }
    //console.log(res)
    debugger
    
    if(!isPresent){
        notes.push({
            title:Title,
            body:Body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added!"))
        
    }
    else{
        console.log(chalk.bgRed("Note Taken already!"))
    }
}

const saveNotes=(notes)=>   // convert into json and write into notes.json file
{
    const notesJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',notesJSON)
}

const loadnotes=()=>{

    try {
        const notesBuffer=fs.readFileSync('notes.json')
        const notesData=notesBuffer.toString()
         return JSON.parse(notesData)
    } catch (error) {
        return []
    }

   }

//   Removing section 
const removeNote=(Title)=>
{
    const notes=loadnotes();
    let index=-1
    for(let i=0;i<notes.length;i++)
    {
        if(notes[i].title===Title)
       { index=i;
       }
    }
    if(index!=-1)
    {
        notes.splice(index,1)
        saveNotes(notes)
        console.log(chalk.bgGreen("Note Removed!!!"))
    }
    else{
        console.log(chalk.bgRed("No note removed!!!"))
    }

}


//  Reading section
const readNote=(Title)=>
{
    const notes=loadnotes()
    const toRead= notes.find((note)=> note.title===Title)
    
    if(toRead!==undefined){
        console.log(chalk.bgRed.black(`Title: ${toRead.title}`))
        console.log(chalk.black.bgWhite(`${toRead.body}`))
    }
    else{
        console.log(chalk.bgRed.black(`NOT FOUND!!!`))
    }
    
}

module.exports={
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote:readNote,
}