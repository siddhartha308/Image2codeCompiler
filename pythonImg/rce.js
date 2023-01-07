var exec = require('child_process').exec;
var fs = require('fs')
let uid = process.argv[2]

exec("python file"+uid+".txt "+uid,(e,stdout,stderr)=>
    {
    if(e instanceof Error){

        fs.writeFile("./log.txt", stderr.toString()+"%E%",(e)=>{
console.log(e);
        })
        console.log(stderr.toString());
        return;
    }
    console.log(stdout.toString());
    })