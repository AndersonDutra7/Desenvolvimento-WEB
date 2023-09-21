let nomeFormulario = document.querySelector('.formulario');
let nome = document.querySelector('.tarefa');

nomeFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    buscarNome(nome.value);
});

async function buscarNome(nome) {
    let request = await fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome}`);
    let response = await request.json();

    // console.log(response)
        
    if (response.length > 0) {
        console.log(response[0]['nome']);
        console.log(response[0]['res'][0]['periodo']);
        console.log(response[0]['frequencia']);
    } else {
        console.log('Nome não encontrado na API.');
    }
    
}
