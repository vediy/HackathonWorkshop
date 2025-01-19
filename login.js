
        const hashMap = {
        "Bob Banks": 42,
        "Advay Tirumala": 7,
        "Jane Smith": 109,
        "Anonymous": 721
        };

        function populateTable(map) {
            const tableBody = document.getElementById("hashmap-table");
            tableBody.innerHTML = "";

            for (const [key, value] of Object.entries(map)) {
                const row = document.createElement("tr");

                const keyCell = document.createElement("td");
                keyCell.textContent = key;

                const valueCell = document.createElement("td");
                valueCell.textContent = value;

                row.appendChild(keyCell);
                row.appendChild(valueCell);
                tableBody.appendChild(row);
            }
        }
        
        function handleFormSubmit(event) {

            event.preventDefault(); // Prevent the default form submission beha
            const nameInput = document.getElementById("name");
            const numberInput = document.getElementById("addRec");

            const name = nameInput.value.trim();
            const numberToAdd = parseInt(numberInput.value, 10);

            if (name && !isNaN(numberToAdd)) {
                if (hashMap.hasOwnProperty(name)) {
                // Add the number to the existing value
                hashMap[name] += numberToAdd;
                } else {
                hashMap[name] = numberToAdd;
                }

            populateTable(hashMap);

            nameInput.value = "";
            numberInput.value = "";
            }
        }

    populateTable(hashMap);
    
    const form = document.getElementById("update-form");
    form.addEventListener("submit", handleFormSubmit);