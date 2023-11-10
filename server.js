let express = require('express');



//creer la liste

let taskList = [];
//mettre les elems exemple
taskList.push("MANGER 1ere fois");
taskList.push("MAnger ENCOREREE");
taskList.push("Miam manger 3eme fois");

let app = express();
app.use(express.static('public'));
app.get('/', (request,response)=>{
    ans1 = request.query.task
    an2 = request.query.delete
    console.log(ans1);
    taskList.push(ans1)
    response.render('home.ejs', { taskList : taskList });
})
app.listen(3000, function(){
    console.log("Server ok");
});

//// Page LOgic



