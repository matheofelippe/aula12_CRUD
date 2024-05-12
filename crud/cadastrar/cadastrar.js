document.querySelector('#myForm').addEventListener('submit', function(event) {
    event.preventDefault();
});


const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');


// ==================================================
// Modo Editar
if (id) {
    var name1 = document.querySelector('#name1');
    var email = document.querySelector('#email');
    var age = document.querySelector('#age');


    fetch(`${urlServer}${id}`)
    .then(response => response.json())
    .then(data => {
        name1.value = data.name1;
        email.value = data.email;
        age.value = data.age ;
    });


    document.querySelector('#btn-cadastrar').innerHTML = 'Atualizar';
   
    document.querySelector('#btn-cadastrar').onclick = atualizar;
}




function atualizar() {
    var name1 = document.querySelector('#name1').value;
    var email = document.querySelector('#email').value;
    var age = document.querySelector('#age').value;


    var cliente = {
        "name1": name1,
        "email": email,
        "age": age
    };


    fetch(`${urlServer}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(() => window.location.href = '../index.html');
}


// ==================================================
// Modo Cadastrar
function cadastrar() {
    var name1 = document.querySelector('#name1').value;
    var email = document.querySelector('#email').value;
    var age = document.querySelector('#age').value;


    var cliente = {
        "name1": name1,
        "email": email,
        "age": age
    };


    fetch(`${urlServer}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(() => window.location.href = '../index.html');


}
