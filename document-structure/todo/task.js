const tasksForm = document.getElementById('tasks__form');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
tasksForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    const taskTitle = document.createElement('div');
    taskTitle.classList.add('task__title');
    taskTitle.textContent = tasksInput.value;
    newTask.appendChild(taskTitle);
    const removeButton = document.createElement('a');
    removeButton.classList.add('task__remove');
    removeButton.textContent = '×';
    newTask.appendChild(removeButton);
    removeButton.addEventListener('click', function() {
        newTask.remove();
    });
    tasksList.appendChild(newTask);
    tasksInput.value = '';
    tasksInput.focus();
    tasksForm.reset();
});
