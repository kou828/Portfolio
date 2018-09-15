var app = new Vue({
    el: '#app',
    
    data: {
        seen:true,
        todos:[
            { text: '1' },
            { text: '2' },
            { text: '3' }
        ]
    }
     ,methods: {
        reverseMessage: function () {
            this.todos.push({text:"222"});
        }
    }
})