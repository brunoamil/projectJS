//Passando URL para o fetch
        const removeCliente = id => {
            if(confirm("Deseja deletar o cliente?")){
                deletaCliente(id);
                document.location.reload()
            }
        }
        
        const corpoTabela = document.querySelector("[data-conteudo-tabela]");

        const exibeCliente = (data, quantidade, valor, id) => {

            const linha = document.createElement("tr");

            const conteudoLinha = `
                <td>${data}</td>
                <td>${quantidade}</td>
                <td>${valor}</td>
                <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
                <a href="edita-clientes.html?id=${id}"><button class="btn btn-info">Editar</button></a>
            `;

            linha.innerHTML = conteudoLinha;
            return linha;
        }

       listarClientes().then( exibe => {
            exibe.forEach(clientes => {
            corpoTabela.appendChild(exibeCliente(Date(clientes.data), clientes.quantidade, clientes.valor));
        }); 
       }   
    )