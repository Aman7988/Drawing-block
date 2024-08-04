document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawing = false;
    let colorIndex = 0;
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

    function drawLine(startX, startY, endX, endY, color) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.stroke();
    }

    function handleMouseMove(event) {
        if (!drawing) return;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const color = colors[colorIndex];
        drawLine(lastX, lastY, mouseX, mouseY, color);

        lastX = mouseX;
        lastY = mouseY;

        colorIndex = (colorIndex + 1) % colors.length;
    }

    let lastX, lastY;

    canvas.addEventListener("mousedown", function(event) {
        drawing = true;
        lastX = event.clientX;
        lastY = event.clientY;
    });

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseup", function() {
        drawing = false;
    });

    canvas.addEventListener("mouseleave", function() {
        drawing = false;
    });

    window.addEventListener("resize", function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
