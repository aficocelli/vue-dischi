var app = new Vue({

  el: '#root',

  data:{

    albums: [],

    genreOption:[]

  },

  mounted: function(){

    let myThis = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(response){

      myThis.albums = response.data.response;

      console.log(myThis.albums);

      for(var i = 0; i < myThis.albums.length; i++){

        if (myThis.genreOption.includes(myThis.albums[i].genre) == false){

          myThis.genreOption.push(myThis.albums[i].genre);

        }

      }

      console.log(myThis.genreOption);

    });




  }
});
