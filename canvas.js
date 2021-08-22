var i1=new Image();
var i2=new Image();
var i3=new Image();
var i4=new Image();

i1.src="./img/1.png";
i2.src="./img/2.png";
i3.src="./img/3.png";
i4.src="./img/4.png";

width = 150;
height = 150;

var canvas = document.querySelector('#mycanvas');
canvas.width = window.innerWidth;
canvas.height = 1061;

var c= canvas.getContext('2d');


function Img(img, x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.img = img;

  this.draw = function() {
    // i1.onload=function () {
    //     c.drawImage(i1, x, y, 20, 20); 
    // };
    c.drawImage(this.img, this.x, this.y, width, height); 
  }

  this.update = function() {
    if (this.x + 10 > window.innerWidth || this.x - 10 < 0) {
      this.dx = -this.dx
    }
  
    if (this.y + 10 > 1061 || this.y - 10 < 0) {
      this.dy = -this.dy
    }
  
    this.x+=this.dx;
    this.y+=this.dy;

    // this.draw();
    c.drawImage(this.img, this.x, this.y, width, height); 
  }
}

var imgs_srs = [i1, i2, i3, i4]
var imgs = [];
for (let i = 0; i < 4; i++){
  var x = Math.random() * (window.innerWidth - 10*2) + 10; 
  var y = Math.random() * (1061 - 10*2) + 10;

  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;

  imgs.push(new Img(imgs_srs[i], x, y, dx, dy));
}


animate();

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,window.innerWidth,1061);

  for(let i = 0; i < imgs.length; i++){
    imgs[i].update();
  }
}