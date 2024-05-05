function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    
    // Display thank you message
    var thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you, ' + firstName + ' ' + lastName + ', a representative will contact you soon!!';
    document.getElementById('introductionForm').appendChild(thankYouMessage);
}