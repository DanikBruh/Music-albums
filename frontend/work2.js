const url = "http://localhost:3000/albums";

var app = new Vue({
    el: '#musicAlbums',
    data: {
        albums: [],
        // album: {
        //     name: null,
        //     spotify_page: null,
        //     avatar: null,
        // }
    },
    mounted() { 
        axios.get(url).then(res => {
            this.albums = res.data;
        });
    }
  })