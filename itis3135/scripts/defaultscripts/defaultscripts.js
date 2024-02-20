function scriptTest() {
    alert("Hey, my script is running");
}

// Add more functions as needed
// Function to display current time, day, and date
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = `Today is ${dateTimeString}`;
}

// Function to submit user form and display greeting
function submitForm() {
    const userName = document.getElementById('userName').value;
    const userFeeling = document.getElementById('userFeeling').value;
    const greetingElement = document.getElementById('greeting');

    // Display greeting
    greetingElement.textContent = `The Animal Brand Company welcomes you, ${userName}! We're glad you are feeling ${userFeeling}!`;

    // Call function to display favorite polygon information
    displayFavoritePolygon();
}

// Function to display information about the favorite polygon based on the user's number
function displayFavoritePolygon() {
    const userNumber = Math.abs(Math.round(parseFloat(document.getElementById('userNumber').value)));

    const polygonNames = ['Monogon', 'Digon', 'Trigon', 'Tetragon', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon'];

    const polygonName = polygonNames[userNumber];
    alert(`Your favorite polygon is a ${polygonName}.`);
}

// Animal Brand Company functions
function function1() {
    alert("Function 1: Provide an interesting fact about our animal!");
}

function function2() {
    alert("Function 2: Play a fun sound related to our animal!");
}

function function3() {
    alert("Function 3: Generate a random joke involving our animal!");
}

function function4() {
    alert("Function 4: Show a cute image or GIF of our animal!");
}

function function5() {
    alert("Function 5: Share a motivational quote inspired by our animal!");
}

// Call the function to display date and time
displayDateTime();
