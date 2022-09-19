const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipcodeInput = document.getElementById('zipcode');
const pw = document.getElementById('password');
const cpw = document.getElementById('confirmPw');

emailInput.addEventListener('input', () => {
  emailInput.setCustomValidity('');
  emailInput.checkValidity();
})