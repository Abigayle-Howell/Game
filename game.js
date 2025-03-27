// Game setup
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to full window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    color: 'blue',
    dx: 4,
    dy: 3,
    gravity: 0.2,
    friction: 0.98
};

// Draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Update ball position with physics
function updateBall() {
    // Apply gravity
    ball.dy += ball.gravity;

    // Apply friction
    ball.dx *= ball.friction;
    ball.dy *= ball.friction;

    // Move ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Ball collision with walls (bounce effect)
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBall();
    requestAnimationFrame(gameLoop);
}

// Start game loop
gameLoop();
