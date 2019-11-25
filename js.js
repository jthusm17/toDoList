console.log("initialized");

Vue.component('row', {
    template: `
    <div>
    <input v-model="listDesc"> 
    <button>Add</button>
    </div>
    `,
    
    data() {
        return { 
            listDesc: null
        }
    }
    
})
var app = new Vue({
    el: '#app', 
    data: {
        listName: "To Do",
        itemId: 0
    },
    methods: {
        addItem: function(){
            this.itemId += 1
        }
    }
})

