// Exercise 6
function validate() {
	var error = 0;

	// Get the input fields
	var fName = document.getElementById("fName")
	var fLastN = document.getElementById('fLastN')
	var fEmail = document.getElementById("fEmail")
	var fPassword = document.getElementById('fPassword')
	var fAddress = document.getElementById('fAddress')
	var fPhone = document.getElementById('fPhone')

	// Get the error elements
	var errorName = document.getElementById("errorName")
	var errorLastN = document.getElementById('errorLastN')
	var errorEmail = document.getElementById("errorEmail")
	var errorPassword = document.getElementById('errorPassword')
	var errorAddress = document.getElementById('errorAddress')
	var errorPhone = document.getElementById('errorPhone')

	// Reseting all validation classes from the HTML file
	fName.classList.remove('is-invalid')
	fLastN.classList.remove('is-invalid')
	fEmail.classList.remove('is-invalid')
	fPassword.classList.remove('is-invalid')
	fAddress.classList.remove('is-invalid')
	fPhone.classList.remove('is-invalid')

	// Validate field of name
	let stringPattern = /^[a-zA-Z]+$/
	if (fName.value.trim() === "" || fName.value.length < 3 || !stringPattern.test(fName.value.trim())) {
		error++;
		fName.classList.add("is-invalid")
	} else {
		fName.classList.remove("is-invalid")
	}

	// Validate field of last name
	if (fLastN.value.trim() === "" || fLastN.value.length < 3 || !stringPattern.test(fName.value.trim())) {
		error++
		fLastN.classList.add("is-invalid")
	} else {
		fLastN.classList.remove("is-invalid")
	}

	// Validate field of email
	if (fEmail.value.trim === "" || fName.value.length < 3 || !fEmail.value.includes('@')) {
		error++;
		fEmail.classList.add("is-invalid")
	} else {
		fEmail.classList.remove("is-invalid")
	}

	// Validate field of password
	if (fPassword.value === "" || fPassword.value.length < 4 || !/\d/.test(fPassword.value) || !/[a-zA-Z]/.test(fPassword.value)) {
		error++;
		fPassword.classList.add("is-invalid")
	} else {
		fPassword.classList.remove("is-invalid")
	}

	// Validate field of address
	if (fAddress.value.trim() === "" || fAddress.value.length < 3) {
		error++
		fAddress.classList.add("is-invalid")
	} else {
		fAddress.classList.remove("is-invalid")
	}

	// Validate field of phone
	if (fPhone.value.trim() === "" || fPhone.value.length < 9) {
		error++
		fPhone.classList.add("is-invalid")
	} else {
		fPhone.classList.remove("is-invalid")
	}

	// If there are no errors, the info is saved
	if (error > 0) {
		alert("Error, please check your fields again");
	} else {
		window.alert("OK! Your information has been saved");
		document.getElementById('checkoutForm').submit()
	}
}