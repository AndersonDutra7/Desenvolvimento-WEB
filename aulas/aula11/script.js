let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let cidade = document.querySelector('.form-control')

async function getApi(cidade){
    let request = await fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${cidade}`)
    let data = await request.json ()

    // exibição
    container.innerHTML += `
    <p>${data['name']}</p>
    <p>Temperatura Máx: ${data['main']['temp_max']}</p>
    <p>Temperatura Mín: ${data['main']['temp_min']}</p>
    <p>Temperatura Média: ${data['main']['temp']}</p>
    `

}

// getApi()

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    getApi(cidade.value)
})