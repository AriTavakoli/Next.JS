const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


window.addEventListener("resize", function () {


});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);



const mouse = {
  x: undefined,
  y: undefined,
};

// canvas.addEventListener("click", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
//   console.log(mouse);
//   console.log(event);
// });

// an array of all mouse events
const mouseEvents = ["click", "mousedown", "mouseup", "mousemove"];




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




console.log(ctx);