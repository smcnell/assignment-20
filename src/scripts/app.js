import $ from 'jquery'
import Backbone from 'backbone'

import {createRadioTemplate} from './template-radio.js'
import {createStartingTemplate} from './starting-template.js'


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


//
  showHomePage: function(){
  console.log("HELLO HOME PAGE!!!")
  let infoContainerEl = document.querySelector('.information-container')
		$.getJSON('http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
        let introducingArray = serverRes.playlist.introducing
        // console.log(introducingArray)
			  infoContainerEl.innerHTML =  createStartingTemplate(introducingArray, "Introducing")
		})
},

  showRadio1: function(){
  console.log("HELLO RADIO1 PAGE!!!")
  let infoContainerEl = document.querySelector('.information-container')
    $.getJSON('http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){

        let radio1Array = serverRes.playlist.a
              console.log(radio1Array)
              infoContainerEl.innerHTML =  createRadioTemplate(radio1Array, "Radio1")
    })
  },

  showRadio2: function(){
  console.log("HELLO RADIO2 PAGE!!!")
  let infoContainerEl = document.querySelector('.information-container')
    $.getJSON('http://www.bbc.co.uk/radio2/playlist.json').then(function(serverRes){

        let radio2Array = serverRes.playlist.a
              console.log(radio2Array)
              infoContainerEl.innerHTML =  createRadioTemplate(radio2Array, "Radio2")
    })
  },

})

let myBBCRadioApplication = new AppRouter()
