const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const zipcodeInput = document.getElementById('zipcode');
const pw = document.getElementById('password');
const cpw = document.getElementById('confirmPw');

emailInput.addEventListener('input', () => {
  e.preventDefault();
  emailInput.setCustomValidity('');
  emailInput.checkValidity();
});

emailInput.addEventListener('invalid', () => {
  e.preventDefault();
  if ( emailInput.value === ''){
    emailInput.setCustomValidity('enter your email')
  } else {
    emailInput.setCustomValidity('Enter a valid email address')
  }
});

countryInput.addEventListener('change', (e) => {
  if(countryInput.value === 'default'){
    countryInput.setCustomValidity('please select a country')
  }
  countryInput.setCustomValidity('success');
  countryInput.checkValidity();
})

countryInput.addEventListener('invalid', (e) => {
  e.preventDefault();
  if ( countryInput.value === 'default'){
    countryInput.setCustomValidity('select a country, you cannot leave it like this');
  }
})

zipcodeInput.addEventListener('input', () => {
  zipcodeInput.setCustomValidity('success');
  zipcodeInput.checkValidity();
})

zipcodeInput.addEventListener('invalid', (e) => {
  if ( zipcodeInput.value === ''){
    zipcodeInput.setCustomValidity('come on.... put something here');
  } else if (zipcodeInput.value < 10000 || zipcodeInput.value > 99999){
    zipcodeInput.setCustomValidity('Uh uh uh... only 5 number, no more, no less')
  }
})

pw.addEventListener('input'), () => {
  pw.setCustomValidity('yesss!');
  pw.checkValidity();
}

pw.addEventListener('invalid', () => {
  let magic = /^[A-Za-z]\w{7,100}$/;
  if (pw.value.match(magic)){
    pw.setCustomValidity("Yes it's working")
  } else {
    pw.setCustomValidity('Usual please.')
  }
})

cpw.addEventListener('input', () => {
  if (cpw.value !== pw.value){
    cpw.setCustomValidity('ermmmm... not quite there yet');
  } else {
    cpw.setCustomValidity('Aha...!')
  }
})

cpw.addEventListener('invalid', () => {
  cpw.setCustomValidity('It is your password and you typed it wrong. you disappoint me ')
})