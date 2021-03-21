 const validator= require('validator')
 const yargs= require('yargs')
 const chalk =require('chalk')
 const notes= require('./notes')


// console.log(validator.isURL('gkgk.in'))

// console.log(chalk.green('Success!!!'))
// console.log(chalk.cyan.bgRed.bold.underline('Taruna'))

yargs.version('1.1.0')


// console.log(process.argv)


yargs.command({
    command: 'add',   // properties are fixed
    describe: 'Add note',
    builder: {
        title:{
            describe:'title name',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:"note body",
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:"list",
    describe:"list note",
    
    handler(){
        notes.getNotes()
    }
})
yargs.command({
    command:"read",
    describe:"read note",
    builder: {
        title:{
            describe:'title name',
            demandOption: true,
            type:'string'
        },
       },
    handler(argv){
        notes.readNote(argv.title)
    }
})
yargs.command({
    command:"remove",
    describe:"remove note",
    builder: {
        title:{
            describe:'title name',
            demandOption: true,
            type:'string'
        },
       
    },
    handler(argv){
       notes.removeNote(argv.title)
    }
    
})

//console.log(yargs.argv)    for parsing or we can write below parse() func
yargs.parse()    // alaways at end after commands declarations
