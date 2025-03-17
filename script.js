document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript carregado!");

    // Selecionar elementos
    const botao = document.querySelector("#botao");
    const h1 = document.querySelector("h1");
    const campoTexto = document.querySelector(".campo-texto");
    const lista = document.querySelector(".lista");

    // Altera o texto do h1 para "Olá, mundo!" ao carregar a página
    h1.textContent = "Olá, mundo!";

    // Muda o texto do h1 para "Botão clicado!" quando o botão for pressionado
    botao.addEventListener("click", function() {
        h1.textContent = "Botão clicado!";
    });

    //  Muda a cor de fundo do h1 para vermelho ao clicar no botão
    botao.addEventListener("click", function() {
        h1.style.backgroundColor = "red";
    });

    //  Imprime o valor do campo na consola ao pressionar Enter
    campoTexto.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log("Valor digitado:", campoTexto.value);
           
        }
    });

    //  Remove um item da lista quando clicado
    lista.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log("Removendo:", event.target.textContent);
            event.target.remove();
        }
    });
});
