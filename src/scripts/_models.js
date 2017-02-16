
const PlaylistModel= Backbone.Model.extend({
})

export const Playlist1Collection= Backbone.Collection.extend({
  initialize: function(){
  },

  parse: function(rawServerRes){
  console.log('parsing Response')
  console.log(rawServerRes)
  return rawServerRes.playlist.a
  },

  url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',

  model: PlaylistModel

})
//

export const Playlist2Collection= Backbone.Collection.extend({
  initialize: function(){
  },

  parse: function(rawServerRes){
  // console.log('parsing Response!!')
  return rawServerRes.playlist.a
  },


  url: '/proxy?api=http://www.bbc.co.uk/radio2/playlist.json',

  model: PlaylistModel

})


export const PlaylistHomepageCollection= Backbone.Collection.extend({
  initialize: function(){
  },

  parse: function(rawServerRes){
  console.log('parsing Response')
  console.log(rawServerRes.playlist)
  return rawServerRes.playlist.introducing
  },

  url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',

  model: PlaylistModel

})
