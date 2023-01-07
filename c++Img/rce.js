var exec = require('child_process').exec;
var fs = require('fs')
let uid = process.argv[2]

// exec("javac file"+uid+".txt ",(e,stdout,stderr)=>{
//     {
//         if(e instanceof Error){
//             fs.writeFile("./log.txt",stderr.toString()+"%E%",(e)=>{
//                 console.log(e);
//             })
//             console.log(stderr.toString());
//             return;
//         }
//     }
// })





exec("g++ File"+uid+".cpp -o code",(e,stdout,stderr)=>
    {
    if(e instanceof Error){

        fs.writeFile("./log.txt", stderr.toString()+"%E%",(e)=>{
console.log(e);
        })
        console.log(stderr.toString());
        return;
    }
    exec("./code < input"+uid+".txt > log.txt",
    (e,stdout,stderr)=>
    {
    if(e instanceof Error){

        fs.writeFile("./log.txt", stderr.toString()+"%E%",(e)=>{
console.log(e);
        })
        console.log(stderr.toString());
        return;
    }
    // exec("cat input"+uid+".txt | java input"+uid+" > log.txt")

    console.log("sl" +stdout.toString());
    }
    )
    console.log("l"+stdout.toString());
    })