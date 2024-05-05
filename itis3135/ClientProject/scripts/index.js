function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    
    // Display thank you message
    var thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you, ' + firstName + ' ' + lastName + ', for submitting the form!';
    document.getElementById('introductionForm').appendChild(thankYouMessage);
}