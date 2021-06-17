function getMovieData() {
	fetch("https://leaf-lofty-vulture.glitch.me/movies")
		.then(response => {
			response.json()
					.then(data => {
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
	const url = 'https://leaf-lofty-vulture.glitch.me/movies'
	let movieRating = $('#rating')
		.val()
	let movieTitle = $('#title')
		.val()

	let newMovie = {
		title: movieTitle,
		rating: movieRating
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








