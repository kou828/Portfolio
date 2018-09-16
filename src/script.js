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

var app2 = new Vue({
    el: '#app2',

    data: {
        message: 'hoge',
    }
})

// todo-item と呼ばれる新しいコンポーネントを定義
Vue.component('todo-item', {
    props:['todo']
    , template: '<li>{{ todo.text }}</li>'
})

// コンポーネント呼び出し
var app3 = new Vue({
    el: '#app3'
    ,data: {
        groceryList: [ 
            {id : 0, text: 'aaa'}
            , { id: 3, text: 'vvv' }
            , { id: 2, text: 'ccc' }
        ]
    }
})