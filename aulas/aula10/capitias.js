let formName = document.querySelector('form')
let inputName = document.querySelector('.nome-input')
let regiaoDoEstado = document.querySelector('p')

formName.addEventListener('submit', async function(e){
    e.preventDefault()

    let infoNames = await getApi(inputName.value);
    regiaoDoEstado.innerHTML = ''

    infoNames.forEach(function (item){
        regiaoDoEstado.innerHTML += `
    <p>
        ${item.regiao}
    </p>
    `
    });

})

async function getApi(){
    let request = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`);
    let response = await request.json();

    return response[0]
}

getApi()