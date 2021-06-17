
function appendAllMovieData(movieArr){
    movieArr.forEach(function (obj) {
        $(".movie-container").append(getMovieCard(obj));
    })
}



function getMovieCard(movieObj) {
    let moviecard = $(`<div class="card col-4 mt-2 p-0"> </div>`)

    moviecard.append(`<div class="card-header title">${movieObj.title}</div>

		<div class="card-body movie-card"  data-id="${movieObj.id}">
		<img src="${movieObj.poster}" class="img-fluid" alt="">
		<hr>
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
		<hr>
		<label for="editrating">Add new rating</label>
		<input type="text" id="editrating" class="editRating">
		<label for="edittitle">Add new title</label>
		<input type="text" id="edittitle" class="editTitle">
		<button class="btn-primary" id="edit" onclick="editMovie(${movieObj.id})"> Edit</button>
		<button class="btn-primary" id="delete" onclick="deleteMovie(${movieObj.id})"> Delete</button>
	</div>`)
    return moviecard;
}


















