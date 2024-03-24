document.querySelectorAll('.botao-interativo').forEach(function(botao) {
    botao.addEventListener('click', function() {
        // Adicione aqui a lógica para alterar a opacidade ou qualquer outra ação desejada
        botao.classList.toggle('clicked'); // Adiciona ou remove a classe 'clicked' ao botão
    });
});

document.getElementById('prevButton').addEventListener('click', function() {
    moveAndToggleZoom(true); // Movimenta para a esquerda e adiciona/remover a classe zoomed
});

document.getElementById('nextButton').addEventListener('click', function() {
    moveAndToggleZoom(false); // Movimenta para a direita e adiciona/remover a classe zoomed
});

function moveAndToggleZoom(moveLeft) {
    const produtosContainers = document.querySelectorAll('.produtos-container, .produtos-containerum');
    produtosContainers.forEach(function(container) {
        const produtos = container.querySelectorAll('.produto');
        produtos.forEach(function(produto) {
            if (moveLeft) {
                produto.style.transform = 'translateX(0)';
            } else {
                produto.style.transform = `translateX(-${produto.offsetWidth}px)`;
            }
            produto.classList.toggle('zoomed'); // Alterna a classe zoomed
        });
    });
}
// trocando descrição dos produtos de uma vez só 
document.addEventListener("DOMContentLoaded", function() {
    var produtos = document.querySelectorAll('.produto');

    produtos.forEach(function(produto) {
        var preco = produto.querySelector('p').textContent;

        if (preco === 'R$ 50,00') {
            produto.querySelector('h3').textContent = 'Ração para Cachorro';
        } else if (preco === 'R$ 60,00') {
            produto.querySelector('h3').textContent = 'Sache para Gato';
        }
    });
})
document.addEventListener("DOMContentLoaded", function() {
    var produtos = document.querySelectorAll('.produto');

    produtos.forEach(function(produto) {
        var preco = produto.querySelector('p').textContent;
        var nomeProduto = produto.querySelector('h3').textContent;

        if (preco === 'R$ 50,00' && nomeProduto === 'Ração para Cachorro') {
            produto.addEventListener('click', function() {
                // Redireciona para a página de compra da ração para cachorro
                window.location.href = 'compraProduto.html?produto=racao_cachorro';
            });
        } else if (preco === 'R$ 60,00' && nomeProduto === 'Sache para Gato') {
            produto.addEventListener('click', function() {
                // Redireciona para a página de compra da ração para gato
                window.location.href = 'compraProdutoo.html?produto=racao_gato';
            });
        }
    });
});









































