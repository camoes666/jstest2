var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
console.log("AAAA")
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
ctx.fillStyle = 'green';
ctx.fillRect(10, 200, 50, 50);
