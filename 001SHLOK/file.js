
const fs = require("fs");

// Sync.....
// fs.writeFileSync('./test.txt', 'Hey There, Hello world');

// Async.....
// fs.writeFile("./test.txt", "Hello I am Shlok Kumar", (err) => {});


// Sync.....
// const result = fs.readFileSync('./contacts.txt', "utf-8");

// console.log(result);

// Async.....
 
// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err);           
//     }else {
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt",`${Date.now()} hey ! i am \n`);

// // To copy file.....
// fs.cpSync("./test.txt", "./copy.txt");

// //To delete file.....
// fs.unlinkSync("./copy.txt");


// console.log(fs.statSync('./test.txt').isFile());




// Blocking.....
// console.log("1");
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);

// console.log("2");




// //Non - Blocking.....

// console.log("1");

// fs.readFile("contacts.txt", "utf-8", (err, result) => {
//     console.log(result);
// });

// console.log("2");
// console.log();




// //Default Thread Pool Size = 4
////Max? - 8core cpu - 8
 

// const os = require("os");
// console.log(os.cpus().length);
