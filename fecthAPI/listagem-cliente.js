//Passando URL para o fetch
      
        const corpoTabela = document.querySelector("[data-conteudo-tabela]");

        const exibeCliente = (data, quantidade, valor) => {

            const linha = document.createElement("tr");

            const conteudoLinha = `
                <td>${data}</td>
                <td>${quantidade}</td>
                <td>${valor}</td>
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