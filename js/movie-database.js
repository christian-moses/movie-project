
fetch("https://leaf-lofty-vulture.glitch.me/movies")
	.then(response => {
		response.json()
			.then(data => {
				appendAllMovieData(data)
				console.log(data)
				})
			})













