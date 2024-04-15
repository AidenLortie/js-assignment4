const image = document.getElementById("characterImg");
const name = document.getElementById("characterName");
const info = document.getElementById("info");
const submit = document.getElementById("btnSubmit");
const characterId = document.getElementById("characterId");
const studentId = document.getElementById("studentId");
// My selected API is the Rick and Morty API
// Documentation: https://rickandmortyapi.com/documentation
// This API does not require an API key to access the data
// In this assignment, I am using the character endpoint to fetch the character details
// The character endpoint requires the character ID to fetch the character details
// The character ID is provided by the user in the input field - and is 1 by default
const baseurl = "https://rickandmortyapi.com/api/character/";


// Async function to fetch the character details from the API
async function process(id) {
    // Fetch the character details from the API then get the JSON response
    fetch(baseurl + id).then((r) => r.json()).then((json) => {
        // Set the character image, name, status, species, and location details
        image.src = json.image;
        name.textContent = json.name
        info.innerHTML = `Status: ${json.status}<br>Species: ${json.species}<br>Current Location: ${json.location.name}`
    });
}

// Event listener for the submit button
submit.addEventListener("click", (e) => {
    // Fetch the character details using the character ID provided by the user then catch any errors
    process(characterId.value).catch((e) => console.error(e));
    // Prevent the default form submission
    e.preventDefault();
    // Set the student ID
    studentId.textContent = "Student ID: 1217609"
});

// Fetch the character details using the default character ID (1) then catch any errors
process(1).catch((e) => console.error(e));