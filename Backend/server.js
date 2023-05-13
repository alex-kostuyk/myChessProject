const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const url = require("url");
const bodyParser = require('body-parser');
const { response } = require('express');

const port = process.env.PORT || 3000;

app.use(bodyParser());
let clientresponceRef;
app.get('/*',(req,res)=>{

    let pathname = url.parse(req.url).pathname;

    let obj = {
       pathname: pathname,
       method: "get",
       params: req.query 
    }
    io.emit("page-request",obj)
    clientresponceRef =res;
})

app.post('/*',(req,res)=>{
    
    let pathname = url.parse(req.url).pathname;

    let obj = {
       pathname: pathname,
       method: "post",
       params: req.body 
    }
    io.emit("page-request",obj)
    clientresponceRef =res;
})

io.on('connection',(socket)=>{
    console.log('a node connected');
    socket.on("page-responce",(response)=>{

    })
})

http.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});