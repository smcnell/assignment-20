export const createStartingTemplate = function(songList, someName){
	let startingHtmlStr = songList.map(function(songObj){
		return `
    <div class="jumbotron myjumbotron">
<h3>${songObj.title}</h3>
<p>${songObj.artist}</p>
<img class="profile-img" src="${songObj.image}">
</div>
`
	}).join("")

	return `
	<h1 class= "introducing-title">${someName}</h1>
	<hr/>
	<div class="jumbotron">
		${startingHtmlStr}
	</div>
	`

}
