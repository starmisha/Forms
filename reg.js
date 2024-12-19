document.getElementById("registration-form").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent the form from submitting by default

	// Get the values from the form
	let login = document.getElementById("login").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;
	let confirmPassword = document.getElementById("confirm-password").value;
	let isValid = true; // Assume validity initially

	// Clear any previous errors messages
	clearErrors();

	// Validate the login
	if (login.trim() === "") {
		showError("login-error", " Please enter a login");
		isValid = false;
	} else if (login.length < 3) {
		showError("login-error", " Login must contain at least 3 characters");
		isValid = false;
	}

	// Validate the email
	if (email.trim() === "") {
		showError("email-error", //Please enter an email);
			isValid = false);
	} else if (!validateEmail(email)) {
		showError("email-error", //Please enter a valid email);
			isValid = false);
	}

	// Validate the password
	if (password.trim() === "") {
		showError("password-error", //Please enter a password);
			isValid = false);
	} else if (password.length < 6) {
		showError("password-error", //Password must contain at least 6 characters);
			isValid = false);
	}

	// Validate the confirm password
	if (confirmPassword.trim() === "") {
		showError("confirm-password-error", //Please confirm your password);
			isValid = false);
	} else if (password !== confirmPassword) {
		showError("confirm-password-error", //Password do not match);
			isValid = false);
	}

	// If all fields are valid, redirect to the login page
	if (isValid) {
		alert("Registration successful!");
		window.location.href = "login.html";
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

// Function to validate email using a regular expression
function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
