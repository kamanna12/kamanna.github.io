document.getElementById('riskAnalysisForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Perform validation here
    
    //Check if age is above a certain value
    var age = parseInt(document.getElementById('age').value);
    if (age < 18) {
        alert('This risk tool is not designed to be used by individuals younger than 18. Please consult with a healthcare provider if you do have concerns.');
        return;
    }
    
    var smokerType = document.getElementById('smokerType').value;
    if (smokerType === 'current') {
        alert('As a current smoker, you are at risk of lung complications. Please consult with a healthcare provider.');
        return;
    } else if (smokerType === 'former') {
        alert('As a former smoker, you are still at risk of lung complications. Consider consulting with a healthcare provider for next steps.');
        return;
    } else {
        alert('You are not at risk of lung complications. However, it is important to maintain a healthy lifestyle.');
        return;
    }
    
    // If all validation passes, you can submit the form
    this.submit();
});