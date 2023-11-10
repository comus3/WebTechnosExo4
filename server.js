let express = require('express');

let app = express();
app.use(express.static('public'));
app.get('/', (request,response)=>{
    response.render('home.ejs');

})
app.listen(3000, function(){
    console.log("Server ok")
});

