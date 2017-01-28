var movieData = {
  "baseURL": "https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=",
  "api_key": "306bd1f9dda87b11475c98f9d47e3862",
  "page": "&page=1",
  "url": function(){return this.baseURL + this.api_key + this.page},

  "request": function(callback){
    var apiRequest = new XMLHttpRequest();

    apiRequest.open("GET", this.url(), true);
    apiRequest.send();

    apiRequest.onreadystatechange = function() {
      if (apiRequest.readyState == XMLHttpRequest.DONE ) {
         if (apiRequest.status == 200) {
           this.movies = apiRequest.responseText;

           callback();

         } else {
             console.log('Error ',apiRequest.status);
         }
      }

    };

  },

    "test": "hello"
}

module.exports = movieData;
