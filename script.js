
function validateForm() {
const name = document.forms['contactForm']['name'].value;
const email = document.forms['contactForm']['email'].value;
const message = document.forms['contactForm']['message'].value;

if (!name || !email || !message) {
alert('All fields must be filled out');
return false;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
alert('Please enter a valid email address');
return false;
}
return true; 
}

