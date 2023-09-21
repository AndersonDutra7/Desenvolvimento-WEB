let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let tarefa = document.querySelector('.tarefa')
let listaTarefa = document.querySelector('.lista')

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    // console.log(tarefa.value);

    // let item = document.createElement('li')
    // item.innerHTML = tarefa.value
    // listaTarefa.appendChild(item)

    listaTarefa.innerHTML += `<li class="vermelho">${tarefa.value}</li>`

    // let itens = document.querySelector('li')
    let itens = document.querySelectorAll('li')
    itens.forEach(function(item){
        item.addEventListener('click', function(event){
            // console.log(item.innerHTML);
            // item.remove()
            // item.classList.add('vermelho')
            item.classList.toggle('vermelho')
        })
    })

    console.log(itens);
})

async function getName(){
    let request = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/anderson')
    let response = await request.json()
    console.log(response[0]['nome']);
}

getName()