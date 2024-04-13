window.onload = function() {
    displayDateTime();
}

function displayDateTime() {
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const mainElement = document.querySelector('main');
    const headerElement = document.createElement('h3');
    headerElement.textContent = `Today is ${formattedDateTime}`;
    mainElement.insertAdjacentElement('afterbegin', headerElement);
}

// Function to submit user input and display greeting
function submitUserInput() {
    const userName = document.getElementById('userName').value;
    const userFeeling = document.getElementById('userFeeling').value;

    document.getElementById('greeting').textContent = `The AmannaInnovation Incorporated welcomes you, ${userName}! We're glad you are doing ${userFeeling}!`;
}

function submitFavoriteNumber() {
    const favoriteNumber = Math.round(Math.abs(document.getElementById('favoriteNumber').value));

    const polygonNames = ["Circle", 'Digon', 'Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon', 'Heptagon', 'Octagon', 'Nonagon', 'Decagon', 'Hendecagon'];
    const polygonName = polygonNames[favoriteNumber - 1] || 'Unknown';

    alert(`A polygon with ${favoriteNumber} sides is called a ${polygonName}.`);
}

function function1() {
    var vehicle_promotion = ["Free Tire Rotation", "Free Oil Changes", "0% APR", "$500 OFF for Veterans", "$500 OFF for University Graduates"];
    var randomIndex = Math.floor(Math.random() * vehicle_promotion.length);
    alert(vehicle_promotion[randomIndex]);
}

function function2() {
    var vehicles = ["Sedan", "SUV", "Pickup Truck", "Car"];
    var randomIndex = Math.floor(Math.random() * vehicles.length);
    alert(vehicles[randomIndex]);
}


function function3() {
    var vehicle_year = ["2019", "2020", "2021", "2022","2023","2024"];
    var randomIndex = Math.floor(Math.random() * vehicle_year.length);
    alert(vehicle_year[randomIndex]);
}

function function4() {
    var vehicle_model = ["Honda Civic", "Honda Accord", "Tesla Model 3", "Toyota Camry","Ford F-150","Ford Mustang"];
    var randomIndex = Math.floor(Math.random() * vehicle_model.length);
    alert(vehicle_model[randomIndex]);
}

function function5() {
    var vehicle_price = ["$20,000", "$25,000", "$30,000", "$35,000","$40,000","$45,000"];
    var randomIndex = Math.floor(Math.random() * vehicle_price.length);
    alert(vehicle_price[randomIndex]);
}