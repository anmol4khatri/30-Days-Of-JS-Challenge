// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector('button');
const paragraph = document.querySelector('p');

button.addEventListener('click', () => {
    paragraph.textContent = 'New text content';
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const image = document.querySelector('img');

image.addEventListener('dblclick', () => {
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
});

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const element = document.querySelector('.element');

element.addEventListener('mouseover', () => {
    element.style.backgroundColor = 'red';
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
});

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const inputField = document.querySelector('input');

inputField.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const outputParagraph = document.querySelector('.output');

inputField.addEventListener('keyup', () => {
    outputParagraph.textContent = inputField.value;
});

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form data:', new FormData(form));
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectDropdown = document.querySelector('select');
const selectOutput = document.querySelector('.select-output');

selectDropdown.addEventListener('change', () => {
    selectOutput.textContent = selectDropdown.value;
});

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log('Clicked list item:', event.target.textContent);
    }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElement = document.querySelector('.parent');

parentElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('child')) {
        console.log('Clicked dynamically added child element');
    }
});