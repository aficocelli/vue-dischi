var app = new Vue({

  el: '#root',

  data:{

    albums: [],

    genreOption:[],

    selected:"",

    ordered:""
  },


  mounted: function(){

    var myThis = this;

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(response){

      let orderedAlbums = response.data.response.sort((a, b)=> (a.year > b.year)? 1 : (a.year < b.year) ? -1 : (a.title > b.title)? 1 : (a.title < b.title)? -1 : 0 );

      myThis.albums = orderedAlbums;

      for(var i = 0; i < myThis.albums.length; i++){

        if (myThis.genreOption.includes(myThis.albums[i].genre) == false){

          myThis.genreOption.push(myThis.albums[i].genre);

        }

      }


    });

  },

  computed: {

    albumOrdinati: function(){

      if(this.ordered == 1){

         return this.albums.sort((a, b)=> (a.title > b.title)? 1 : (a.title < b.title)? - 1 : 0 );
      } else if(this.ordered == 2) {

        return this.albums.sort((a, b)=> (a.genre > b.genre)? 1 : (a.genre < b.genre)? - 1 : 0 );
      } else {

        return this.albums.sort((a, b)=> (a.year > b.year)? 1 : (a.year < b.year) ? -1 : (a.title > b.title)? 1 : (a.title < b.title)? -1 : 0 );

      }

    }


  }
});
