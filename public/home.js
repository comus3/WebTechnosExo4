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

const taskList = new TaskList();
//mettre les elems exemple
taskList.addTask("MANGER");
taskList.addTask("MAnger ENCOREREE");
taskList.addTask("Miam manger ajd");

//gestion du bouton add task
var button = document.getElementById("button");
button.addEventListener("click", addTask());


function updateTasks(){
    var taskListElement = document.getElementById('taskList');
    taskListElement.textContent = ""
    taskList.getTasks().array.forEach(element => {
        taskListElement.appendChild(element)
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        newTask.appendChild(deleteButton);
    });

}

function addTask() {
    var taskInput = document.getElementById('taskInput');

    if (taskInput.value.trim() !== '') {
        taskList.addTask(taskInput)
        taskInput.value = '';
    }
}

