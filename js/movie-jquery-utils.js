
function appendAllMovieData(movieArr){
    movieArr.forEach(function (obj) {
        $(".movie-container").append(getMovieCard(obj));
    })
}



function getMovieCard(movieObj) {
    let moviecard = $(`<div class="card col-md-2 mt-2"> </div>`)

    moviecard.append(`<div class="card-header title ">(title) ${movieObj.title}</div>

		<div class="card-body movie-card"  data-id="${movieObj.id}">
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
		<input type="text" class="editRating">
		<button class="btn-primary" id="delete" onclick="deleteMovie(${movieObj.id})"> Delete</button>
		<button class="btn-primary" id="edit" onclick="editMovie(${movieObj.id})"> Edit</button>
	</div>`)
    return moviecard;
}


















