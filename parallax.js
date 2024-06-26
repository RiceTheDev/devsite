const body = document.querySelector("body");

// Criando o elemento para o fundo escuro
const darkBackground = document.createElement("div");
darkBackground.classList.add("dark-background");
body.insertBefore(darkBackground, body.firstChild);

// Criando o elemento para a imagem de fundo
const bodyBefore = document.createElement("div");
bodyBefore.classList.add("background");
body.insertBefore(bodyBefore, darkBackground.nextSibling);

// Função para definir o background image
function setBackgroundImage() {
    bodyBefore.style.backgroundImage = `url('walk-anime_scaled_5x_minified.gif')`;
    bodyBefore.style.filter = "blur(5px)";
    bodyBefore.style.backgroundSize = "cover";
    bodyBefore.style.width = "100vw";
    bodyBefore.style.height = "100vh";
    bodyBefore.style.position = "fixed";
    bodyBefore.style.top = "0";
    bodyBefore.style.left = "0";
    bodyBefore.style.zIndex = "1"; // Alterado para colocar em cima do fundo escuro
}

// Função para definir o fundo escuro
function setDarkBackground() {
    darkBackground.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Cor e opacidade do fundo escuro
    darkBackground.style.width = "100vw";
    darkBackground.style.height = "100vh";
    darkBackground.style.position = "fixed";
    darkBackground.style.top = "0";
    darkBackground.style.left = "0";
    darkBackground.style.zIndex = "0"; // Colocando atrás da imagem de fundo
}

// Chamar as funções para definir o background image e o fundo escuro
setBackgroundImage();
setDarkBackground();

document.addEventListener("mousemove", (e) => {
    const sensitivity = 31;
    const mouseX = (e.clientX / window.innerWidth - 0.5) * sensitivity;
    const mouseY = (e.clientY / window.innerHeight - 0.5) * sensitivity;
    // Removido o código de definição do background image aqui
    bodyBefore.style.transform = `scale(1.23) translate(${-mouseX}px, ${-mouseY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".profile-box, .social-box, .rounded-icon").forEach(function (element) {
        element.classList.add("fadeIn");
    });
});

function updateTime() {
    const clockElement = document.querySelector(".animated-clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1e3);
updateTime();

