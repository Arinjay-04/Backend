const fs = require("fs");


fs.writeFile("message.txt", "Hello from Tanmay", (err) => {
    if(err) throw err;
    console.log("The file has been saved..!!");
})

fs.readFile("message.txt", "utf-8", (data, err)=>{
    if(data) throw data;
    console.log(err);
})