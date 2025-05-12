// Function to change text content
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const paragraph = document.getElementById('textParagraph');
    paragraph.textContent = 'The text content has been changed by JavaScript!';
});

// Function to modify CSS styles
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    const paragraph = document.getElementById('textStyle');
    paragraph.classList.toggle('highlight'); // Toggles the 'highlight' class to modify the style
});

// Function to add a new element
document.getElementById('addElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added element!';
    container.appendChild(newElement);
});

// Function to remove the last added element
document.getElementById('removeElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    if (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
});
