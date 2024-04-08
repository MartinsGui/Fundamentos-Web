function saveFormDataAndRedirect() {
    // Obter dados do formulário
    var formData = {
        NomeDoTutor: document.getElementById("NomedoTutor").value,
        NomeDoPet: document.getElementById("NomedoPet").value,
        Porte: document.getElementById("Porte").value,
        Comportamento: document.getElementById("Comportamento").value,
        Endereco: document.getElementById("Endereço").value,
        Telefone: document.getElementById("Telefone").value,
        NomeDeLogin: document.getElementById("NomedeLogin").value,
        Email: document.getElementById("email").value,
        ConfirmarEmail: document.getElementById("confirmarEmail").value,
        Senha: document.getElementById("Senha").value,
        ConfirmarSenha: document.getElementById("confirmarSenha").value,
        Animal: document.querySelector('input[name="animal"]:checked').value
    };

    // Salvar os dados do formulário no localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Redirecionar para a página do cliente
    window.location.href = "./indexCliente.html";
}

// Redirecionar para a página home.html quando o link "Sair" for clicado
document.querySelector('.Sair').addEventListener('click', function() {
    window.location.href = './index.html';
});

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    const offset = -slideIndex * slides[0].offsetWidth;
    document.getElementById('carousel-images').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}

 // Obter todas as imagens
 const images = document.querySelectorAll('#img img');
 let index = 0;

 // Função para alternar entre as imagens
 function changeImage() {
     // Ocultar todas as imagens
     images.forEach(img => img.style.display = 'none');
     // Exibir a próxima imagem
     images[index].style.display = 'block';
     // Atualizar o índice para a próxima imagem
     index = (index + 1) % images.length;
 }

 // Iniciar o carrossel
 setInterval(changeImage, 3000); // Altera a cada 3 segundos