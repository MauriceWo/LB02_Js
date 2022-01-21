'use strict'

//fetch existing tasks from localstorage
const getSavedTasks = () => {
    //read from browser storage
    const tasksJSON = localStorage.getItem('task');
    try {
        //if tasksJSON contains data
        if (tasksJSON){
            return JSON.parse(tasksJSON);
        } else {
            return [];
        }
    //return tasksJSON ?  JSON.parse(tasksJSON) : [];
    } catch (err){
    console.error(err);
    return [];
    }
}

//save tasks to localstorage
const saveTasks = () => {
    //write to browser storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render application tasks based on filters
const renderTasks =  (tasks) => {
    document.querySelector('#tasks').innerHTML = '';
    
    tasks.forEach( (task) => {
        document.querySelector('#tasks')
            .appendChild(generateTaskDOM(task))
    });
}

const generateTaskDOM = (task) => {
    const taskEL = document.createElement('div');
    const taskText = document.createElement('span');

    // Setup the task text
    taskText.textContent = task.text;
    taskEL.appendChild(taskText)

    return taskEL;
}