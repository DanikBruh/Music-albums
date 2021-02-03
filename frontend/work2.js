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

var table = document.getElementById('table');
var array = table.children;
var tableCells = [];
for(i = 0; i < array.length; i++) {
    for(j = 0; j < array[i].childElementCount; j++) {
        for(k = 0; k < array[i].children[j].childElementCount; k++) {
            tableCells.push(array[i].children[j].children[k])
        }
    }
}

var prev = 0;
setInterval(function() {
    var rand = Math.floor(Math.random() * Math.floor(tableCells.length))
    while(rand == prev) {
        rand = Math.floor(Math.random() * Math.floor(tableCells.length))
    }
    prev = rand
    for(i = 0; i < tableCells.length; i++) {
        ChangeToBlack(i);
    }
    ChangeToWhite(rand);
}, 400);

function ChangeToBlack (index) {
    tableCells[index].style.background = "#333";
    tableCells[index].style.color = "#fff";
}
function ChangeToWhite (index) {
    tableCells[index].style.background = "#fff";
    tableCells[index].style.color = "#333";
}