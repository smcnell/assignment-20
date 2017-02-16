import $ from 'jquery'
import Backbone from 'backbone'

import {createRadioTemplate} from './template-radio.js'
import {createStartingTemplate} from './starting-template.js'
import {Playlist1Collection, Playlist2Collection} from './_models.js'


// console.log('wired up')
// console.log($)
// console.log(Backbone)


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing!')
		Backbone.history.start()
	},

  routes: {
	  'radio/1' : 'showRadio1',
		'radio/2' : 'showRadio2',
		'' : 'showHomePage',
    '*default' : 'showErrorPage'
	},

  showErrorPage: function(words){
		let appContainerEl = document.querySelector('#app-container')
		appContainerEl.innerHTML = `<h1 class='bg-info'>This page does not exist</h1>`
  },






  showRadio1: function(){
  console.log("HELLO RADIO1 PAGE!!!")
  let infoContainerEl = document.querySelector('.information-container')

    let playlist1RadioCollection= new Playlist1Collection()

    playlist1RadioCollection.fetch().then(function(serverRes){
      let firstModelsList= playlist1RadioCollection.models
      let bigHTMLStr= createRadioTemplate(firstModelsList, "Radio1")
      document.querySelector(".information-container").innerHTML= bigHTMLStr

    })

  },



  showRadio2: function(){
  console.log("HELLO RADIO2 PAGE!!!")
  let infoContainerEl = document.querySelector('.information-container')


  let playlist2RadioCollection= new Playlist2Collection()

  playlist2RadioCollection.fetch().then(function(serverRes){
    let secondModelsList= playlist2RadioCollection.models
    let bigHTMLStr= createRadioTemplate(secondModelsList, "Radio2")
    document.querySelector(".information-container").innerHTML= bigHTMLStr

  })

},


showHomePage: function(){
console.log("HELLO HOME PAGE!!!")
let infoContainerEl = document.querySelector('.information-container')



  $.getJSON('http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
      let introducingArray = serverRes.playlist.introducing
      // console.log(introducingArray)
      infoContainerEl.innerHTML =  createStartingTemplate(introducingArray, "Introducing")
  })
},



})


//link buttons//
// let buttonEl=document.querySelector('.mylinksbuttons')
// buttonEl.addEventListener("click", function(evt){
//   console.log("click")
//
//   var currentTarget= evt.target
//   console.log(currentTarget)
//
//
//
// })

let myBBCRadioApplication = new AppRouter()
