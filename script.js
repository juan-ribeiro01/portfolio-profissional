// EFEITO DE DIGITAÇÃO

const texto = "Desenvolvedor Front-End em Formação";
const typing = document.getElementById("typing");

let i = 0;

function escrever() {

    if (i < texto.length) {

        typing.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escrever, 80);
    }
}

escrever();


// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    ".card, .stat, section h2, #sobre p"
);

function revelarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach(elemento => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < alturaTela - 100) {

            elemento.classList.add("mostrar");
        }
    });
}

window.addEventListener("scroll", revelarElementos);

revelarElementos();


// EFEITO DE BRILHO NO MOUSE

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(96,165,250,0.25),
        #1e293b 60%)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1e293b";
    });

});


// NAVBAR MUDA AO DESCER

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background =
        "rgba(15,23,42,0.98)";

    } else {

        nav.style.background =
        "rgba(15,23,42,0.95)";
    }

});