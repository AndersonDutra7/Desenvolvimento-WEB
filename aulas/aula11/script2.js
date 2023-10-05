// let container = document.querySelector('.container')

// async function getTodos(){
//     let request = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//     let data = await request.json()

//     data.forEach((element) => {
//         container.innerHTML += `
//         <p>${element.title}</p>
//         `
//     });
// }

// getTodos()

const app = Vue.createApp({
    data(){
        return{
            // nome: 'Hello Vue!!!',
            // linguagens: ['Python', 'Dart', 'JS', 'KOTLIN']
            todos: []
        }
    },

    methods: {
        async getTodos() {
            let request = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            let data = await request.json()
            this.todos = data
        }
    },

    mounted(){
        this.getTodos()
    }
})

app.mount('#app')
