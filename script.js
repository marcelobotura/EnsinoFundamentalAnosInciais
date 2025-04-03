document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todas as imagens dentro da galeria
    const images = document.querySelectorAll(".image-grid img");

    // Adiciona um evento de clique a cada imagem
    images.forEach(img => {
        img.addEventListener("click", function () {
            // Cria um elemento div para o modal
            const modal = document.createElement("div");
            modal.classList.add("modal");

            // Insere o conteúdo do modal, incluindo a imagem ampliada e o botão de fechar
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">×</span>
                    <img src="${this.src}" alt="Imagem ampliada">
                </div>
            `;

            // Adiciona o modal ao corpo do documento
            document.body.appendChild(modal);

            // Adiciona um evento de clique ao botão de fechar para remover o modal
            document.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});