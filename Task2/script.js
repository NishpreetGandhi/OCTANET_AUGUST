function toggleComplete(event) {
    const checkbox = event.target;
    const task = checkbox.previousElementSibling;

    if (checkbox.checked) {
        task.classList.add('completed');
    } else {
        task.classList.remove('completed');
    }
}

function addTask() {
    const taskInput = document.querySelector('.taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskContainer = document.createElement('div');
    taskContainer.className = 'ToDo';

    const taskElement = document.createElement('input');
    taskElement.type = 'text';
    taskElement.value = taskText;
    taskElement.setAttribute('readonly', true);

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.addEventListener('change', toggleComplete);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', removeTask);

    taskContainer.appendChild(taskElement);
    taskContainer.appendChild(checkboxElement);
    taskContainer.appendChild(removeButton);

    document.querySelector('.content').appendChild(taskContainer);

    taskInput.value = '';
}

function removeTask(event) {
    const taskContainer = event.target.parentElement;
    taskContainer.remove();
}

document.querySelectorAll('.ToDo input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', toggleComplete);
});


document.querySelector('.addTaskBtn').addEventListener('click', addTask);