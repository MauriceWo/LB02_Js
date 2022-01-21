'use strict'

//get task list as JSON-object format
let task = getSavedTasks();

//show task list
renderTasks(tasks);


document.querySelector('#new-task')
    .addEventListener('submit', (e) =>{
        e.preventDefault()

        //add new task with push-method into JSON-object
        task.push({
            id: uuidv4,
            text: e.target.elements.text.value,
            completed: false
        });
        //save tasks
        saveTasks(tasks);
        //show tasks
        renderTasks(tasks);
        e.target.elements.text.value = '';
    })
