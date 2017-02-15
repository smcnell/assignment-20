export const createRadioTemplate = function(songList, someName){
	let playlistHtmlStr = songList.map(function(songObj){
		return `
			<div class="col-xs-12 col-sm-4 col-md-3 mydivclass">
				<div class="thumbnail mythumbnail">
					<img class="profile-img" src="${songObj.image}">
					<h2>${songObj.title}</h2>
          <h4>${songObj.artist}</h4>
				</div>
			</div>
		`
	}).join("")

	return `
	<h1>${someName} Playlist</h1>
	<hr/>
	<div class="row">
		${playlistHtmlStr}
	</div>
	`

}
