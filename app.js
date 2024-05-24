        
    function comprar(){

        let tipo = document.getElementById('tipo-ingresso').value;
        let qtd = parseInt(document.getElementById('qtd').value);

        if(tipo == 'pista'){comprarPista(qtd);}
        else if (tipo == 'inferior'){comprarInferior(qtd);}
        else{comprarSuperior(qtd);}}


            function comprarPista(qtd){
            let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
            let novaQuantidadeP = parseInt(document.getElementById('compra-pista').textContent);

                if (qtd > qtdPista) {
                alert('Quantidade indisponível para Pista');
                } else {
                qtdPista = qtdPista - qtd;
                novaQuantidadeP= novaQuantidadeP + qtd;
                document.getElementById('compra-pista').textContent = novaQuantidadeP;
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert('Compra realizada com sucesso!');
            }}


            function comprarInferior(qtd){
                let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
                let novaQuantidadeI = parseInt(document.getElementById('compra-inferior').textContent);

                    if (qtd > qtdInferior) {
                    alert('Quantidade indisponível para tipo Cadeira Inferior');
                    } else {
                    qtdInferior = qtdInferior - qtd;
                    novaQuantidadeI = novaQuantidadeI + qtd;
                    document.getElementById('compra-inferior').textContent = novaQuantidadeI;
                    document.getElementById('qtd-inferior').textContent = qtdInferior;
                    alert('Compra realizada com sucesso!');
                }}

                function comprarSuperior(qtd){
                    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
                    let novaQuantidadeS = parseInt(document.getElementById('compra-superior').textContent);
        
                        if (qtd > qtdSuperior) {
                        alert('Quantidade indisponível para Cadeira Superior');
                        } else {
                        qtdSuperior = qtdSuperior - qtd;
                        novaQuantidadeS = novaQuantidadeS + qtd;
                        document.getElementById('compra-superior').textContent = novaQuantidadeS;
                        document.getElementById('qtd-superior').textContent = qtdSuperior;
                        alert('Compra realizada com sucesso!');
                    }}

         
