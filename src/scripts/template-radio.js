import Backbone from 'backbone'

//attempt at models//
export const createRadioTemplate = function(songList, someName){
	let playlistHtmlStr = songList.map(function(songObj){
    console.log(songObj)
    // console.log(songObj.get('title'))
		return `
			<div class="col-xs-12 col-sm-4 col-md-3 mydivclass">
				<div class="thumbnail mythumbnail">
					<img class="profile-img" src="${songObj.get('image')}">
					<h2>${songObj.get('title')}</h2>
          <h4>${songObj.get('artist')}</h4>
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


//old//

// export const createRadioTemplate = function(songList, someName){
// 	let playlistHtmlStr = songList.map(function(songObj){
// 		return `
// 			<div class="col-xs-12 col-sm-4 col-md-3 mydivclass">
// 				<div class="thumbnail mythumbnail">
// 					<img class="profile-img" src="${songObj.image}">
// 					<h2>${songObj.title}</h2>
//           <h4>${songObj.artist}</h4>
// 				</div>
// 			</div>
// 		`
// 	}).join("")
//
// 	return `
// 	<h1>${someName} Playlist</h1>
// 	<hr/>
// 	<div class="row">
// 		${playlistHtmlStr}
// 	</div>
// 	`
//
// }
