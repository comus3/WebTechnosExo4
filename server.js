let express = require('express');

let app = express();
app.get('/', (request,response)=>{
    response.render('home.ejs');

})
app.listen(3000, function(){
    console.log("Server ok")
});

//partie js pour la pg home
class Task {
    constructor(description) {
        this.description = description;
    }

    returnTask() {
        return this.description;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
    }

    deleteTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    getTasks() {
        return this.tasks.map(task => task.returnTask());
    }
}

// Exemple d'utilisation :

const taskList = new TaskList();

taskList.addTask("MANGER");
taskList.addTask("MAnger ENCOREREE");
taskList.addTask("Miam manger ajd");




var button = document.getElementById("button");
button.addEventListener("click", addTask());


function updateTasks(){
    var taskList = document.getElementById('taskList');
    taskList.textContent = ""

}

function addTask() {
    var taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        var newTask = document.createElement('li');
        newTask.textContent = taskInput.value;
        taskList.appendChild(newTask);
        taskInput.value = '';

        // Optional: Add a delete button for each task
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
    }
}

