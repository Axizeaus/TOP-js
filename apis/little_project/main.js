const img = document.querySelector('img');
const searchBar = document.getElementById('searchbar');
const btn = document.getElementById('btn');

btn.addEventListener('click', getDataFromSearchBar);
window.onload = () =>{
  changeGif('Welcome');
}

async function changeGif(keyWord){
  try{
    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Xp8HAklJWvCKqA1IXFoBQwtSwtTZCS8e&s=${keyWord}`, {mode: 'cors'})
    let responseData = await response.json();
    img.src = responseData.data.images.original.url;
  } catch {
    console.log(e);
  }
}

function getDataFromSearchBar(){
  const data = searchBar.value;
  if (!data){
    changeGif('nothing');
  }
  else {
    changeGif(data);
  }
}