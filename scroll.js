// Variável para controlar o estado do efeito de neve (ligado/desligado)
let snowEffectOn = true;

// Função para ligar/desligar o efeito de neve
function toggleSnowEffect() {
  if (snowEffectOn) {
    snowfall.style.opacity = '0'; // Desliga o efeito de neve
  } else {
    snowfall.style.opacity = '1'; // Liga o efeito de neve
  }
  
  // Inverte o estado do efeito de neve
  snowEffectOn = !snowEffectOn;
}

// Adiciona um event listener para a tecla de espaço (keyCode 32)
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 32) {
    toggleSnowEffect(); // Chama a função para ligar/desligar o efeito de neve
  }
});


document.getElementById("buttonhidebolas").addEventListener('click', function(){
  toggleSnowEffect();
});