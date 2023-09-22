let click = document.querySelector('.button')
let lista = document.querySelector('.table')

click.addEventListener('click', async function(e) {
    e.preventDefault()

    let info = await getApi();
    lista.innerHTML = ''

    info.forEach(function (item){
        lista.innerHTML += `
    <tr>
        <td>${item['name']}</td>
        <td>${item['phone']}</td>
        <td>${item['email']}</td>
    </tr>
    `
    });
});


async function getApi(){
    let request = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let response = await request.json();

    return response[0]['phone']
}