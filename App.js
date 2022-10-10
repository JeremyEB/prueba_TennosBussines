const api_URL = "https://localhost:44381/api/values";

const xhr = new XMLHttpRequest();

function onRequestHandler(){
    if(this.readysState == 4 && this.status == 200){
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado al metodo open
        // 2 = Headers_Received, se esta llamando al metodo send.
        // 3 = Loading, se esta cargando, es decir, esta recibiendo la respuesta
        // 4 = Done, se ha completado la operacion.
        console.log(this.response);
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${api_URL}/users`);
xhr.send();