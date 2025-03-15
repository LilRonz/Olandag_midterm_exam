let tasks = [];

function addTask(id, name, description) {
    tasks.push({ id, name, description });
}

function viewTasks() {
    return tasks;
}

function updateTask(id, newName, newDescription) {
    let task = tasks.find(task => task.id === id);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example Usage
addTask(1, "Study", "Review JavaScript");
console.log(viewTasks());
updateTask(1, "Study Git", "Review Git commands");
deleteTask(1);
