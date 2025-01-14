const tasksForm = document.getElementById('tasks__form');
const tasksInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
tasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
    if (!tasksInput.value.trim()) {
        return;
    }
    tasksList.insertAdjacentHTML('afterbegin', `
    <div class="task">
        <div class="task__title">
            ${tasksInput.value.trim()}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>
    `);
    tasksInput.value = '';
    tasksList.addEventListener('click', function(event) {
        if (event.target.classList.contains('task__remove')) {
            event.target.parentNode.remove();
        }
    });
    tasksInput.focus();   
});
