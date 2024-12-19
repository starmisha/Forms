document.getElementById("login-form").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the form from submitting by default

	// Get the values from the form
	let username = document.getElementById("username").value;
	let password = document.getElementById("password").value;
	let isValid = true; // Assume validity initially

	// Clear any previous errors messages
	clearErrors();

	// Validate the username
	if (username.trim() === "") {
		showError("username-error", "Please enter a username");
		isValid = false;
	}

	// Validate the password
	if (password.trim() === "") {
		showError("password-error", "Please enter a password");
		isValid = false;
	}

	// If all fields are valid, redirect to the main page
	if (isValid) {
		alert("Login successful!");
		window.location.href = "main.html";
	}
});

// Function to show an error
function showError(id, message) {
	document.getElementById(id).textContent = message;
	document.getElementById(id).style.display = "block";
}

// Function to clear errors
function clearErrors() {
	let errors = document.getElementsByClassName("error-message");
	for (let i = 0; i < errors.length; i++) {
		errors[i].textContent = "";
		errors[i].style.display = "none";
	}
}
