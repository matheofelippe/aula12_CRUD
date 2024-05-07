function listaClientes() {
    let lista = document.querySelector("#lista");
    lista.innerHTML = "";
   
    fetch(urlServer)
        .then(response => response.json())
        .then(data => {
            data.forEach(cliente => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let button = document.createElement("button");


                button.innerHTML = "Excluir";
                button.classList.add("btn-excluir");
                button.onclick = () => {
                    fetch(`${urlServer}${cliente.id}`, {
                        method: "DELETE"
                    })
                    .then(() => listaClientes());
                }  


                a.innerHTML = ` ${cliente.name} - ${cliente.email} - (${cliente.age})`;
                a.href = `cadastrar/cadastrar.html?id=${cliente.id}`;
                a.classList.add("linkCliente");


                li.appendChild(button);
                li.appendChild(a);
                   
                lista.appendChild(li);
            })
        })
}


listaClientes();