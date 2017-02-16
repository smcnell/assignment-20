<<<<<<< HEAD
import Backbone from 'backbone'


export const createStartingTemplate = function(songList, someName){
	let startingHtmlStr = songList.map(function(songObj){
    console.log(songObj)
=======
export const createStartingTemplate = function(songList, someName){
	let startingHtmlStr = songList.map(function(songObj){
>>>>>>> a22f006d9d55b5b5a72d56b9ff535a6908e6e4ed
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
