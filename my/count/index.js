var app = new Vue({
    el: '#app',
    data() {
        return {
            value: 5
        }
    },
    methods: {
        input2:function(val){
            console.log('input'+val)
        },
        change2: function(val){
            console.log('change'+val)
        }
    },
})