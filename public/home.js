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


function updateTasks(taskList){
    var taskListElement = document.getElementById('taskList');
    taskListElement.textContent = ""
    index = 0
    taskList.getTasks().forEach(element => {
        var attribut = document.createElement("div");
        attribut.textContent = element.returnTask();
        taskListElement.appendChild(attribut);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.deleteTask(index);
            updateTasks();
        };
        taskListElement.appendChild(deleteButton);
        index = index + 1;
    });

}

function addTask() {
    var taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        taskList.addTask(taskInput)
        taskInput.value = '';
    }
    updateTasks(taskList)
}

