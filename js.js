console.log("initialized");

Vue.component('row', {
    template: `
    <div>
    <h1> To Do {{  date  }}</h1>
    <h2> Enter Item To Your List </h2>
    </div>
    `,
    
    data() {
        return { 
            placeholder: 0
        }
    }
    
})

var App = new Vue({
    el: '#App',
    data: {
        date: [new Date],
      Items: [
        { description: 'Example Item', completed: false },
      ]
    },
    methods: {
      addItem: function(bob) {
        bob.preventDefault();
        this.date.push(new Date()),
        this.Items.push({
        description: this.Items.description,
          done: false
        },
        );
    },
      deleteItem: function(Items) {
        this.Items.splice(this.Items.indexOf(Items), 1)
      },
    }
  });