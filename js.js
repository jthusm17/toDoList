console.log("initialized");
/*
Vue.component('row', {
    template: `
    <div>
    <input v-model="listDesc"> 
    <button @click="addItem"> Add </button>
    </div>
    `,
    
    data() {
        return { 
            listDesc: null
        }
    }
    
})
*/
Vue.component('item', {
    props: {
        list: {
            type: String
        }
    },
    template: `
    <div>
    <div>
    <button @click="acompleteItem">complete</button>
    <button>delete</button>
    </div>
    {{list}}
    <div>
    <p> - - - - - - -</p>
    </div>
    </div>
    `,
    
    data() {
        return { 
            list: "o",
            methods: {
                completeItem: function(){
                    list.strike()
                }
            }
        }
    }
    
})

var app = new Vue({
    el: '#app', 
    data: {
        list: "",
        listName: "To Do",
        x: 0,
        itemId: []
    },
    methods: {
        addItem: function(){
            this.x += 1
            this.itemId += this.x
        }
    }
})

