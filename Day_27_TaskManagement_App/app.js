const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const taskDueDateInput = document.getElementById('task-due-date');

let tasks = [];

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();
    const dueDate = taskDueDateInput.value;

    if (title && description && dueDate) {
        const task = {
            id: Date.now(),
            title,
            description,
            dueDate
        };

        tasks.push(task);
        displayTasks();

        taskTitleInput.value = '';
        taskDescriptionInput.value = '';
        taskDueDateInput.value = '';
    }
}

function displayTasks() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('bg-white', 'shadow-lg', 'rounded-lg', 'p-4', 'flex', 'justify-between', 'items-center');
        taskElement.dataset.id = task.id;

        const contentWrapper = document.createElement('div');
        contentWrapper.classList.add('space-y-1');

        const titleElement = document.createElement('h3');
        titleElement.classList.add('text-lg', 'font-semibold', 'text-gray-800');
        titleElement.textContent = task.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('text-gray-600');
        descriptionElement.textContent = task.description;

        const dueDateElement = document.createElement('p');
        dueDateElement.classList.add('text-gray-600');
        dueDateElement.textContent = `Due: ${task.dueDate}`;

        contentWrapper.appendChild(titleElement);
        contentWrapper.appendChild(descriptionElement);
        contentWrapper.appendChild(dueDateElement);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('space-x-2');

        const editButton = document.createElement('button');
        editButton.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white', 'font-semibold', 'py-1', 'px-3', 'rounded-md');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('bg-red-500', 'hover:bg-red-600', 'text-white', 'font-semibold', 'py-1', 'px-3', 'rounded-md');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        buttonsContainer.appendChild(editButton);
        buttonsContainer.appendChild(deleteButton);

        taskElement.appendChild(contentWrapper);
        taskElement.appendChild(buttonsContainer);

        taskList.appendChild(taskElement);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        taskTitleInput.value = task.title;
        taskDescriptionInput.value = task.description;
        taskDueDateInput.value = task.dueDate;

        tasks = tasks.filter(t => t.id !== id);
        displayTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    displayTasks();
}