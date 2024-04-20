let persons = [];
        let salaries = [];

        function addSalary() {
            let name = document.getElementById("name").value.trim();
            let salary = document.getElementById("salary").value.trim();
            
            if (name === "" || isNaN(salary)) {
                alert("Please enter valid name and numeric salary.");
                return;
            }

            persons.push(name);
            salaries.push(parseFloat(salary));

            document.getElementById("name").value = "";
            document.getElementById("salary").value = "";

            populateDropdown();
            displaySalary();
            displayResults();
            document.getElementById("name").focus();
        }

        function modifySalary() {
            let selectedIndex = document.getElementById("employeesDropdown").selectedIndex;
            if (selectedIndex === 0) {
                alert("Please select an employee to modify.");
                return;
            }
            
            let newSalary = document.getElementById("newSalary").value.trim();
            
            if (isNaN(newSalary)) {
                alert("Please enter a numeric salary.");
                return;
            }
        
            salaries[selectedIndex - 1] = parseFloat(newSalary);
        
            displaySalary();
            displayResults();
            document.getElementById("newSalary").value = "";
        }
        

        function displayResults() {
            let totalSalary = 0;

            for (let salary of salaries) {
                totalSalary += salary;
            }

            let averageSalary = totalSalary / salaries.length;
            let highestSalary = Math.max(...salaries);

            document.getElementById("results").innerHTML = "<h2>Results</h2>" +
                "<p>Average Salary: " + averageSalary.toFixed(2) + "</p>" +
                "<p>Highest Salary: " + highestSalary.toFixed(2) + "</p>";
        }

        function displaySalary() {
            let tableBody = document.getElementById("results_body");
            tableBody.innerHTML = "";
        
            for (let i = 0; i < persons.length; i++) {
                let row = "<tr><td>" + persons[i] + "</td><td>" + salaries[i] + "</td></tr>";
                tableBody.innerHTML += row;
            }
        }
        

        function populateDropdown() {
            let dropdown = document.getElementById("employeesDropdown");
            dropdown.innerHTML = "";

            let placeholderOption = document.createElement("option");
            placeholderOption.value = "";
            placeholderOption.disabled = true;
            placeholderOption.selected = true;
            placeholderOption.textContent = "Please select an employee";
            dropdown.appendChild(placeholderOption);

            for (let i = 0; i < persons.length; i++) {
                let option = document.createElement("option");
                option.value = persons[i];
                option.textContent = persons[i];
                dropdown.appendChild(option);
            }
        }