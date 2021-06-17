
function appendAllMovieData(movieArr){
    movieArr.forEach(function (obj) {
        $(".movie-container").append(getMovieCard(obj));
    })
}



function getMovieCard(movieObj) {
    let moviecard = $(`<div class="card"> </div>`)

    moviecard.append(`<div class="card-header title">(title) ${movieObj.title}</div>

		<div class="card-body">
		<div class="rating">Rating: ${movieObj.rating} </div>
		<hr>
		<div class="desc-container">
			<div class="year">Year:${movieObj.year}</div>
		</div>
		<hr>
		<div class="genre">Genre: ${movieObj.genre}</div>
		<hr>
		<div class="director">Director: ${movieObj.director}</div>
		<div class="plot">Plot:${movieObj.plot}</div>
		<div class="actors">Actors:${movieObj.actors}</div>
	</div>`)
    return moviecard;
}