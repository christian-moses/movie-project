
function appendAllMovieData(movieArr){
    movieArr.forEach(function (obj) {
        $(".movie-container").append(getMovieCard(obj));
    })
}



function getMovieCard(movieObj) {
    let moviecard = $(`<div class="card col-4 my-2" > </div>`)

    moviecard.append(`<div class="card-header title">${movieObj.title}</div>

		<div class="card-body movie-card"  data-id="${movieObj.id}">
		<img src="${movieObj.poster}" class="img-fluid" alt="">
		<hr>
		<div class="rating">Rating: ${movieObj.rating} </div>
		<hr>
		<div class="desc-container">
			<div class="year">Year: ${movieObj.year}</div>
		</div>
		<hr>
		<div class="genre">Genre: ${movieObj.genre}</div>
		<hr>
		<div class="director">Director: ${movieObj.director}</div>
		<hr>
		<div class="actors">Actors: ${movieObj.actors}</div>
        <hr>
		<div class="plot">Plot: ${movieObj.plot}</div>
		<hr>
		<p>Add new rating</p>
		<input type="text"  class="editRating form-control">
		<p>Add new Title</p>
		<input type="text" class="editTitle form-control">
		<button class="btn-primary form-control mt-2" id="edit" onclick="editMovie(${movieObj.id})"> Edit</button>
		<button class="btn-primary form-control mt-2" id="delete" onclick="deleteMovie(${movieObj.id})"> Delete</button>
	</div>`)
    return moviecard;
}


















