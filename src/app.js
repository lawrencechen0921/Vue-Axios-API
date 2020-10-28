import Vue from 'vue' ;

window.axios = require('axios');


new Vue({
    el: '#app',

    components: {
  
    },


    mounted: function () {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data);


    },


    data: {
        posts: null,
  
    }

});