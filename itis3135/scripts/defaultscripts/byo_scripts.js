// Function to add a new course input field
function addCourse() {
    const coursesContainer = document.getElementById("courses-container");
    const newCourseDiv = document.createElement("div");
    const newCourseInput = document.createElement("input");
    const deleteButton = document.createElement("button");

    newCourseInput.type = "text";
    newCourseInput.name = "courses[]"; // Use an array to store multiple course values
    newCourseInput.placeholder = "Enter a course...";

    deleteButton.textContent = "Delete Course";
    deleteButton.type = "button"; // Specify button type to prevent form submission
    deleteButton.classList.add("delete-button"); // Add a class to the delete button

    // Add event listener to delete button
    deleteButton.addEventListener("click", function() {
        newCourseDiv.remove(); // Remove the course div when delete button is clicked
    });

    // Append input and delete button to a div
    newCourseDiv.appendChild(newCourseInput);
    newCourseDiv.appendChild(deleteButton);
    
    // Append div to courses container
    coursesContainer.appendChild(newCourseDiv);
}

// Function to handle form submission and generate introduction page
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('introForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        const formData = new FormData(this);
        
        // Create introduction page content
        let introContent = '<h2>Introduction</h2>';
        introContent += '<div class="intro-section">';
        introContent += '<p><strong>' + formData.get('name') + ' || ' + formData.get('mascot') + '</strong></p>';
        introContent += '</div>';
        introContent += '<div class="intro-section">';
        introContent += '<h3>' + formData.get('imageCaption') + '</h3>';
        introContent += '<div style="text-align: center;">'; // Center align the image
        introContent += '<img src="' + URL.createObjectURL(formData.get('image')) + '" alt="Uploaded Image" style="max-width: 100%;">'; // Include the image
        introContent += '</div>';
        introContent += '<h4>Personal Background:</h4>';
        introContent += '<p>' + formData.get('personalBackground') + '</p>';
        introContent += '<h4>Professional Background:</h4>';
        introContent += '<p>' + formData.get('professionalBackground') + '</p>';
        introContent += '<h4>Academic Background:</h4>';
        introContent += '<p>' + formData.get('academicBackground') + '</p>';
        introContent += '<h4>Background in the Subject:</h4>';
        introContent += '<p>' + formData.get('webBackground') + '</p>';
        introContent += '<h4>Primary Computer Platform:</h4>';
        introContent += '<p>' + formData.get('compPlatform') + '</p>';
        introContent += '<h4>Courses I\'m Taking & Why:</h4>';
        introContent += '<ul style="text-align: center;">'; // Center align the list
        formData.getAll('courses[]').forEach(function(course) {
            introContent += '<li>' + course + '</li>';
        });
        introContent += '</ul>';
        introContent += '</div>';

        // Display the introduction content
        document.getElementById('introContent').innerHTML = introContent;
    });
});
