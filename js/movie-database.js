const url = 'https://leaf-lofty-vulture.glitch.me/movies'


function getMovieData() {
	fetch("https://leaf-lofty-vulture.glitch.me/movies")
		.then(response => {
			response.json()
					.then(data => {
						$(".movie-container")
							.empty()
						appendAllMovieData(data)
						console.log(data)
					})
		})
}


// window.onload = (event) => {
// 	$("#loading")
// 		.hide("slow")
// 	getMovieData()
// }

$(window).on("load", function(){
	$(".loader-wrapper").fadeOut('slow');
	getMovieData();
});


function addMovies() {
	let movieRating = $('#rating')
		.val()
	let movieTitle = $('#title')
		.val()
	let movieYear = $('#year')
		.val()
	let movieDirector = $('#director')
		.val()
	let movieGenre = $('#genre')
		.val()
	let moviePlot = $('#plot')
		.val()
	let movieActors = $('#actors')
		.val()
	let moviePoster = $('#poster')
		.val()

	let newMovie = {
		title: movieTitle,
		rating: movieRating,
		year: movieYear,
		genre: movieGenre,
		director: movieDirector,
		plot: moviePlot,
		actors: movieActors,
		poster: moviePoster
	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newMovie),
	}

	fetch(url, options)
		.then(res => getMovieData())
}


$('#submit')
	.on('click', function (e) {
		e.preventDefault()
		addMovies()
	})

function editMovie(id) {
	let title;
	let rating;
	if(existing title is empty){
		title = $('mvoieId').val()
	} else {
		title = $(`.movie-card[data-id=${id}] > .editTitle`)
			.val()
	}
	let title = $(`.movie-card[data-id=${id}] > .editTitle`)
		.val()

	let rating = $(`.movie-card[data-id=${id}] > .editRating`)
		.val()


	let options = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: title,
			rating: rating
		}),

	}


	fetch(url + `/${id}`, options)
		.then(res => getMovieData())
}

function deleteMovie(id) {
	let options = {
		method: 'DELETE',
	}
	fetch(url + `/${id}`, options)
		.then(res => getMovieData())
}







