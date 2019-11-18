console.log("initialized");
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