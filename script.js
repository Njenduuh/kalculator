// Get the display element
const display = document.getElementById('display');

// Function to append a number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';  // Clears the display
}

// Function to delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);  // Remove the last character
}

// Function to calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluate the input as a mathematical expression
    } catch {
        display.value = 'Error';  // Show error if calculation fails
    }
}

// Attach event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        // Handle equals separately
        if (value === '=') {
            calculateResult();
        }
        // Clear the display
        else if (value === 'C') {
            clearDisplay();
        }
        // Handle delete/backspace
        else if (value === '⌫') {
            deleteLast();
        }
        // Otherwise, append the number or operator to the display
        else {
            appendToDisplay(value);
        }
    });
});
