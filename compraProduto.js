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
        } else if (produto === 'sache_gato') {
            // Exibe apenas o produto de sache para gato
            document.getElementById('produto-sache-gato').style.display = 'block';
        } else if (produto === 'racao_umida') {
            // Exibe apenas o produto de ração úmida
            document.getElementById('produto-racao-umida').style.display = 'block';
        } else if (produto === 'racao_seca_gato') {
            // Exibe apenas o produto de ração seca para gato
            document.getElementById('produto-racao-seca-gato').style.display = 'block';
        } else if (produto === 'racao_nero_gatos') {
            // Exibe apenas o produto de ração Nero para gatos
            document.getElementById('produto-racao-nero-gatos').style.display = 'block';
        } else if (produto === 'racao_goldeN_cachorro') {
            // Exibe apenas o produto de ração GoldeN para cachorro
            document.getElementById('produto-racao-golden-cachorro').style.display = 'block';
        } else if (produto === 'racao_hills_cachorro') {
            // Exibe apenas o produto de ração Hills para cachorro
            document.getElementById('produto-racao-hills-cachorro').style.display = 'block';
        }
    });
    
