var app = new Vue({
    el: '#app',
    data() {
        return {
            show:false
        }
    },
    methods: {
        handleClose: function(){
            this.show = false
        }
    },
})