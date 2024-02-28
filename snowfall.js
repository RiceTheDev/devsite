var options = {
  // Quantidade de bolinhas
  ballCount: 20,
  // Velocidade mínima da queda das bolinhas (em pixels por segundo)
  minFallSpeed: 3000,
  // Velocidade máxima da queda das bolinhas (em pixels por segundo)
  maxFallSpeed: 7000,
  // Tamanho das bolinhas (em pixels)
  ballSize: 20, // Tamanho das bolinhas
  // Frames por segundo
  fps: 15
};

// Função para criar uma bolinha
function createBall() {
  var ball = document.createElement('img');
  ball.src = 'bola.png'; // Caminho para a imagem
  ball.classList.add('bola');
  var size = options.ballSize + 'px';
  ball.style.width = size;
  ball.style.height = size;
  ball.style.bottom = '100%'; // Começa acima da janela visível
  ball.style.left = Math.random() * (window.innerWidth - options.ballSize) + 'px'; // Posição inicial aleatória
  document.getElementById('snowfall').appendChild(ball);

  var fallSpeed = Math.random() * (options.maxFallSpeed - options.minFallSpeed) + options.minFallSpeed;
  var frameCount = fallSpeed / 1000 * options.fps;
  var distancePerFrame = (window.innerHeight + parseInt(size)) / frameCount;

  // Animação de queda das bolinhas
  var currentFrame = 0;
  var fallInterval = setInterval(function () {
      currentFrame++;
      if (currentFrame <= frameCount) {
          var bottomPosition = (100 - currentFrame / frameCount * 100) + '%';
          ball.style.bottom = bottomPosition;
      } else {
          clearInterval(fallInterval);
          ball.parentNode.removeChild(ball);
          createBall(); // Reinicia a queda
      }
  }, 1000 / options.fps);

  return ball;
}

// Inicialização do efeito de bolinhas
function initSnowfall() {
  for (var i = 0; i < options.ballCount; i++) {
      setTimeout(createBall, Math.random() * 5000); // Cria as bolinhas com um atraso aleatório
  }
}

// Iniciar o efeito de bolinhas quando a página carregar
window.onload = initSnowfall;
