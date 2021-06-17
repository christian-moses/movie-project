const url = 'https://leaf-lofty-vulture.glitch.me/movies'


function getMovieData() {
	fetch("https://leaf-lofty-vulture.glitch.me/movies")
		.then(response => {
			response.json()
					.then(data => {
						$(".movie-container").empty()
						appendAllMovieData(data)
						console.log(data)
					})
		})
}


window.onload = (event) => {
	$("#loading")
		.hide("slow")
	getMovieData()
}



function addMovies(){

	let movieRating = $('#rating')
		.val()
	let movieTitle = $('#title')
		.val()

	let newMovie = {
		title: movieTitle,
		rating: movieRating,
		year: ,
		genre: ,

	}
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newMovie),
	}

	fetch(url,options).then()
}



$('#submit')
	.on('click', function (e) {
		e.preventDefault()
		addMovies()
	})

function editMovie(id){
	let options = {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
		rating: $(`.movie-card[data-id=${id}] > .editRating`).val()
		}),

	}
	fetch(url +`/${id}` , options)
		.then(res => console.log(res))
}

function deleteMovie(id){
	let options = {
		method: 'DELETE',
	}
	fetch(url +`/${id}` , options)
		.then(res => getMovieData())
}







