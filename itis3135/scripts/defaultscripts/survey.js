document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('introForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });
});

function submitForm() {
    // Get form data
    const personalBackground = document.getElementById('personalBackground').value;
    const academicBackground = document.getElementById('academicBackground').value;
    // Get other form fields in a similar manner
    
    // Create introduction page content
    const introContent = `
        <h2>Introduction Page</h2>
        <h3>Personal Background:</h3>
        <p>${personalBackground}</p>
        <h3>Academic Background:</h3>
        <p>${academicBackground}</p>
        <!-- Add other fields here -->
        <a href="#" onclick="resetForm()">Reset</a>
    `;
    
    // Replace the form with the introduction content
    document.getElementById('introForm').reset();
    document.getElementById('introForm').style.display = 'none';
    document.getElementById('introContent').innerHTML = introContent;
}

function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('introForm').style.display = 'block';
    document.getElementById('introContent').innerHTML = '';
}
