export const createStartingTemplate = function(songList, someName){
	let startingHtmlStr = songList.map(function(songObj){
		return `
    <div class="jumbotron">
<h1>${songObj.title}</h1>
<p>${songObj.artist}</p>
<img class="profile-img" src="${songObj.image}">
</div>
`
	}).join("")

	return `
	<h1>${someName}</h1>
	<hr/>
	<div class="jumbotron">
		${startingHtmlStr}
	</div>
	`

}
