export function drawLine() {
  console.log('working')
  canvas.addEventListener("mousedown", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();

    console.log(mouse);
  });

  canvas.addEventListener('mouseup', function (event) {

    const previousCords = {
      x: mouse.x,
      y: mouse.y,
    };
    mouse.x = event.x;
    mouse.y = event.y;
    ctx.beginPath(previousCords.x, previousCords.y);
    ctx.moveTo(previousCords.x, previousCords.y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    drawCircle();

    console.log(event);
    console.log(mouse);

  });
  function drawCircle() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = "blue";
    ctx.fill();
  }

};
export function sayHi() {
  console.log('hi')
}