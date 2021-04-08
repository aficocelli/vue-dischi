var app = new Vue({

  el: '#root',

  data:{

    albums: [],


  },

  mounted: function(){

    let myThis = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(response){

      myThis.albums = response.data.response;

      console.log(myThis.albums);
    });




  }
});
