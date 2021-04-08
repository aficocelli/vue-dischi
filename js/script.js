var app = new Vue({

  el: '#root',

  data:{

    albums: [],

    genreOption:[],

    selected:""
  },

  mounted: function(){

    let myThis = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(response){
      let orderedAlbums = response.data.response.sort((a, b)=> (a.year > b.year)? 1 : (a.year < b.year) ? -1 : 0 )

      myThis.albums = orderedAlbums;

      for(var i = 0; i < myThis.albums.length; i++){

        if (myThis.genreOption.includes(myThis.albums[i].genre) == false){

          myThis.genreOption.push(myThis.albums[i].genre);

        }

      }


    });




  }
});
