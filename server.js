let express = require('express');

let app = express();
app.get('/', (request,response)=>{
    response.send("Hello world");

})
app.listen(3000, function(){
    console.log("Server ok")
});