const img = document.querySelector('img');
const searchBar = document.getElementById('searchbar');
const btn = document.getElementById('btn');

btn.addEventListener('click', getDataFromSearchBar)

function changeGif(keyWord){
  img.src = '#'
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Xp8HAklJWvCKqA1IXFoBQwtSwtTZCS8e&s=${keyWord}`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => img.src = response.data.images.original.url)
  .catch(e => console.log(e));
}

function getDataFromSearchBar(){
  const data = searchBar.value;
  if (data === null || data === undefined || data === ''){
    changeGif('nothing');
  } else {
    changeGif(data);
  }
}