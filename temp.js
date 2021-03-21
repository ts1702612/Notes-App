const { number } = require('yargs')
const yargs= require('yargs')

//add two numbers

yargs.command({
    command:"add",
    describe:"Add two number",
    builder:{
        firstNumber:{
            describe:'First number',
            type:'string',
            },
        secondNumber:{
            describe:'Second number',
            type:'string',
             }
    },
    handler: function(argv){
        let res=""
         res+=argv.firstNumber+argv.secondNumber
        console.log("Result is : " + res)
    }

})
//console.log(yargs.argv)
yargs.parse()   