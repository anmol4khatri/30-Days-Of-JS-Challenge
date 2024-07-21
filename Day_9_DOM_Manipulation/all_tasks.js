// Task 1: Select an HTML element by its ID and change its text content
document.getElementById('myParagraph').textContent = 'New text content';

// Task 2: Select an HTML element by its class and change its background color
document.querySelector('.myClass').style.backgroundColor = 'yellow';

// Task 3: Create a new div element with some text content and append it to the body
const newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list
const newLi = document.createElement('li');
newLi.textContent = 'New list item';
document.getElementById('myList').appendChild(newLi);

// Task 5: Select an HTML element and remove it from the DOM
const elementToRemove = document.getElementById('removeMe');
elementToRemove.parentNode.removeChild(elementToRemove);

// Task 6: Remove the last child of a specific HTML element
const parent = document.getElementById('parent');
parent.removeChild(parent.lastElementChild);

// Task 7: Select an HTML element and change one of its attributes
document.getElementById('myImage').setAttribute('src', 'Tasks\new_img.png');

// Task 8: Add and remove a CSS class to/from an HTML element
const element = document.getElementById('myElement');
element.classList.add('newClass');
element.classList.remove('oldClass');

// Task 9: Add a click event listener to a button that changes the text content of a paragraph
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('clickParagraph').textContent = 'Text changed on click';
});

// Task 10: Add a mouseover event listener to an element that changes its border color
document.getElementById('hoverElement').addEventListener('mouseover', function() {
    this.style.borderColor = 'red';
});