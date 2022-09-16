const content = document.getElementById("content")

export function makeDropDown () {
  const button = document.createElement('button');
  button.textContent = 'click me';
  console.info(button);
  button.addEventListener('click', toggle)
  content.appendChild(button);
}

function toggle(){
  const el = document.getElementById('toggle');
  console.log(el.classList);
  if ( el.classList.contains('active') ) {
    el.classList.remove('active');
    el.classList.add('inactive');
  } else {
    el.classList.add('active');
    el.classList.remove('inactive');
  }
}
