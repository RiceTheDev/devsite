var options = {
    ballCount: 10,
    minFallSpeed: 5000,
    maxFallSpeed: 8000,
    ballSize: 13,
    fps: 10
};

function createBall() {
    var ball = document.createElement('img');
    ball.src = 'bola.png';
    ball.classList.add('bola');
    var size = options.ballSize + 'px';
    ball.style.cssText = `width: ${size}; height: ${size}; bottom: 100%; left: ${Math.random() * (window.innerWidth - options.ballSize)}px;`;
    document.getElementById('snowfall').appendChild(ball);

    var fallSpeed = Math.random() * (options.maxFallSpeed - options.minFallSpeed) + options.minFallSpeed;
    var frameCount = fallSpeed / 1000 * options.fps;
    var distancePerFrame = (window.innerHeight + options.ballSize) / frameCount;

    var currentFrame = 0;
    var fallInterval = setInterval(function () {
        currentFrame++;
        if (currentFrame <= frameCount) {
            ball.style.bottom = `${(100 - currentFrame / frameCount * 100)}%`;
        } else {
            clearInterval(fallInterval);
            ball.remove();
            createBall();
        }
    }, 1000 / options.fps);
}

function initSnowfall() {
    for (var i = 0; i < options.ballCount; i++) {
        setTimeout(createBall, Math.random() * 5000);
    }
}

window.onload = initSnowfall;
