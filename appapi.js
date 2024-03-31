let input = document.querySelector('input');
let moviePoster = document.querySelector('img');
let movieTitle =document.querySelectorAll('h3')[0];
let genre =document.querySelectorAll('h3')[1];
let year =document.querySelectorAll('h3')[2];
let plot =document.querySelectorAll('h3')[3];
let director =document.querySelectorAll('h3')[4];
let actors =document.querySelectorAll('h3')[5];
let searchButton = document.querySelector('button');
let searchAgainButton = document.getElementById('searchAgain');


let apikey =  "a9ef96d4";
window.searchMovie=searchMovie;
window.resetSearch=resetSearch;


function searchMovie(){
    let url = `http://www.omdbapi.com/?t=${input.value}&apikey=${apikey}`;

    fetch(url)
    .then(function(Response){
        return Response.json()
    
    })
    .then(function (data) {
        if (data.Response === 'True') {
            movieTitle.innerHTML = data.Title;
            genre.innerHTML = data.Genre;
            year.innerHTML = data.Year;
            plot.innerHTML = data.Plot;
            director.innerHTML = `Director: ${data.Director}`;
            actors.innerHTML = `Actors: ${data.Actors}`;
            moviePoster.src = data.Poster;
            searchButton.style.display = 'none';
            searchAgainButton.style.display = 'inline-block';
        } else {
            alert('Movie not found. Please try again.');
        }
    })

}

function resetSearch() {
    input.value = '';
    movieTitle.innerHTML = '';
    genre.innerHTML = '';
    year.innerHTML = '';
    plot.innerHTML = '';
    director.innerHTML = '';
    actors.innerHTML = '';
    moviePoster.src = '';
    searchButton.style.display = 'inline-block';
    searchAgainButton.style.display = 'none';
}