document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const submitTask = document.getElementById('submitTask');

    submitTask.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');

        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';

        checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
                taskContent.classList.add('completed');
            } else {
                taskContent.classList.remove('completed');
            }
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    });
});
