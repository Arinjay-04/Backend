import express from "express";

const app = express();
const port = 3000;


app.get('/', (req, resp) =>{
    const d = new Date();
    let day = d.getDay();
    if(day == 0 || day == 4){
        resp.render("index.ejs", {daytype :"Weekend", advice: "It's Time To Rest :)))"})
    }
    else{
        resp.render("index.ejs", {daytype :"Weekday", advice: "It's Time To Work Hard...!!"})
    }
    
});


app.listen( port, (req, resp) => {
    console.log(`Listning on port ${port}`);
});