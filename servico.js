document.addEventListener("DOMContentLoaded", function() {
    var produtos = document.querySelectorAll('.produto');

    // Objeto que mapeia o nome do produto ao link de compra correspondente
    var linksDeCompra = {
        'Ração para Cachorro': 'compraProduto.html?produto=racao_cachorro',
        'Sache para Gato': 'compraProdutoo.html?produto=racao_gato',
        'Ração Úmida': 'racaoumida.html?produto=racao_umida',
        'Ração Seca Gato': 'racaoseca.html',
        'Ração Nero Gatos': 'racaonero.html',
        'Ração GoldeN Cachorro': 'racaoGoldeNDog.html',
        'Ração Hills Cachorro': 'hills.html'
    };

    produtos.forEach(function(produto) {
        var nomeProduto = produto.querySelector('h3').textContent.trim();

        // Verifica se o nome do produto está no objeto de linksDeCompra
        if (nomeProduto in linksDeCompra) {
            produto.addEventListener('click', function() {
                // Redireciona para o link de compra correspondente ao produto
                window.location.href = linksDeCompra[nomeProduto];
            });
        } else {
            console.error("Link de compra não encontrado para o produto: " + nomeProduto);
        }
    });
});


















































