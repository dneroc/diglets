var canvas = document.querySelector('canvas');

/**
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 8;
var dy = (Math.random() - 0.5) * 8;
var radius = 30;
**/


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colorArray = [
    '#ffaaee',
    '#114488',
    '#aa44ff',
    '#aa1111',
    '#aa35b1',
];


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y , this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() {

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }

        this.x += this.dx; 
        this.y += this.dy;

        this.draw();
    }

}



var circleArray = [];
/**
var dx = (Math.random() < 0.5 ? -1 : 1);
var dy = (Math.random() < 0.5 ? -1 : 1);
**/


for (var i = 0; i < 100; i++) {
    var radius = 5;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    circleArray.push(new Circle(x,y,dx,dy,radius))
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight);
    
    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

}


animate();