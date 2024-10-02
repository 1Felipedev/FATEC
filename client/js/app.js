  async function getAll(){
    const panel = document.getElementById("lista")
    const resultado = await fetch('http://localhost:8080/users')
        const dados = await resultado.json()
        console.log(dados)
        const ul = document.createElement("ul")
        console.log(ul);
        
            dados.forEach(usuario => {
                const li = document.createElement("li")
                li.innerHTML = `${usuario.nome} ${usuario.email}`
                ul.appendChild(li)
            });
        panel.appendChild(ul);
    }

    getAll()

    const form = document.getElementById("formuser")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const usuario = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        }
        enviarDados(usuario)
    })
    async function enviarDados(){
        const resultado = await fetch('http://localhost:8080/users',{
            "methodo": "POST",
            "headers":{
                "Content-Type": "aplication/json"
            },
            body: JSON.stringify(usuario)
        })
        const result = await resultado.json()
        console.log(result)
    }