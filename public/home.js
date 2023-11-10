//classse de task
class Task {
    constructor(description) {
        this.description = description;
    }

    returnTask() {
        return this.description;
    }
}
//classse de la lst
class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
        updateTasks();
    }

    deleteTask(index) {
        console.log("heplp im not functionnal!");
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index,1)
            updateTasks();
        }
    }

    getTasks() {
        return this.tasks;
    }
}
//creer la liste

var taskList = new TaskList();
//mettre les elems exemple
taskList.addTask("MANGER");
taskList.addTask("MAnger ENCOREREE");
taskList.addTask("Miam manger ajd");

//gestion du bouton add task
var button = document.getElementById("button");
button.addEventListener("click", function(){
    addTask();
})


function updateTasks(){
    var taskListElement = document.getElementById('taskList');
    taskListElement.textContent = ""
    index = 0
    taskList.getTasks().forEach(element => {
        var attribut = document.createElement("div");
        attribut.textContent = element.returnTask();
        taskListElement.appendChild(attribut);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        const i = index
        deleteButton.addEventListener("click" ,function() {
            taskList.deleteTask(i);
        })
        taskListElement.appendChild(deleteButton);
        index = index + 1;
    });

}

function addTask() {
    var taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        taskList.addTask(taskInput.value.trim())
        taskInput.value = '';
    }
    updateTasks()
}

