function getMovieObject() {
	return fetch("https://leaf-lofty-vulture.glitch.me/movies")
		.then(response => {
			response.json()
					.then(data => {
							alert("loading...")
							console.log(data)
						})
					})

}


getMovieObject()