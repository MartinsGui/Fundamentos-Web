document.addEventListener("DOMContentLoaded", function() {
    var params = new URLSearchParams(window.location.search);
    var produto = params.get('produto');

    // Verifica qual produto foi selecionado e exibe apenas esse produto na página de compra
    if (produto === 'racao_cachorro') {
        // Exibe apenas o produto de ração para cachorro
        document.getElementById('produto-racao-cachorro').style.display = 'block';
    } else if (produto === 'racao_gato') {
        // Exibe apenas o produto de ração para gato
        document.getElementById('produto-racao-gato').style.display = 'block';
    }
});
