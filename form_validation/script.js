const nameInput = document.querySelector('input');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
})

nameInput.addEventListener('invalid', ()=>{
  if (nameInput.value === ''){
    nameInput.setCustomValidity('Enter your username.');
  } else {
    nameInput.setCustomValidity('Usernames can only contain uppercase and lowercase letters. Try again.')
  }
})