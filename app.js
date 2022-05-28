const express = require("express")

const app = express()
app.use( express.static('views') )

//crear otras 3 pages conformato html 

app.get("/",(req,res,next)=>{

    //_ _ dirname
    //sendFile()
    res.sendFile(__dirname + '/views/menu.html')
})

app.get("/document",(req,res,next)=>{

    //_ _ dirname
    //sendFile()
    res.sendFile(__dirname + '/views/index1.html')
})

app.get("/work",(req,res,next)=>{

    //_ _ dirname
    //sendFile()
    res.sendFile(__dirname + '/views/work.html')
})


app.listen(3000,()=>{
    console.log("corriendo en el puerto 3000")
})