var formulario = document.getElementById('formulario');
var contenido = document.querySelector('#contenido');
var existe = false;
var url = "http://192.127.0.1:4000/";

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();

    var datos = new FormData(formulario);
    var user = datos.get('user');
    var message = datos.get('message');

    getUser(user);

    if (existe === false) {
        postUser(user);
        existe = false;
    }

    postTweet(message, user);
})

async function actualizar() {
    axios.get(url + 'tweet')
        .then(function(response) {
            contenido.innerHTML = "";
            response.data.forEach(function(element) {
                contenido.innerHTML += `
                <li class="list-group-item">
                    <h6>${element.idUser}</h3>
                    <p>${element.message}</p>
                </li>
                `
            });
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

async function buscar() {
    var datos = new FormData(formulario);
    var user = datos.get('user');

    axios.get(url + 'tweet/getTweet/' + user)
        .then(function(response) {
            contenido.innerHTML = "";
            response.data.forEach(function(element) {
                contenido.innerHTML += `
                <li class="list-group-item">
                    <h6>${element.idUser}</h3>
                    <p>${element.message}</p>
                </li>
                `
            });
            //console.log(response.data.length);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function getUser(user) {
    axios.get(url + 'user/getUser/' + user)
        .then(function(response) {
            if (response.data.idUser !== undefined) {
                existe = true
            }
            console.log(response.data.idUser);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function postTweet(message, user) {
    axios.post(url + 'tweet', {
            message: message,
            idUser: user
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}

function postUser(user) {
    var name = user.substring(1);

    axios.post(url + 'user/', {
            idUser: user,
            name: name,
            email: 'correo@gmail.com'
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        })
        .then(function() {});
}
