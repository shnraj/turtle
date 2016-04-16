var curX = 149;
var curY = 149;

var turtSize = 4;


function draw() {
    var canvasLines = document.getElementById('layerLines');
    var canvasTurt = document.getElementById('layerTurtle');

    var move_str = document.getElementById("move").value;
    var move_arr = move_str.split(" ")

    var instruction = move_arr[0];
    var num = move_arr[1];
    var p;

  if (canvasLines.getContext && canvasTurt.getContext){
    var ctx = canvasLines.getContext('2d');
    var ctxTurt = canvasTurt.getContext('2d');

    this.turt(ctxTurt, curX, curY);

    if (instruction === "fd") {
        p = this.line(ctx, curX, curY, num);
        curX = p.x;
        curY = p.y;
    }

    if (instruction === "bk") {
        p = this.line(ctx, curX, curY, -num);
        curX = p.x;
        curY = p.y;
    }

    if (instruction === "rt") {
        p = this.blah(ctx, curX, curY, 27, num);
        curX = p.x;
        curY = p.y;
    }

    if (instruction === "lt") {
        p = this.blah(ctx, curX, curY, -27, num);
        curX = p.x;
        curY = p.y;
    }

    if (instruction === "r") {
        p = this.rotate(ctxTurt, curX, curY);
        curX = p.x;
        curY = p.y;
    }

    //ctxTurt.clearRect(0, 0, 300, 300);
    //this.turt(ctxTurt, curX, curY);
  }
}

function turt(ctxTurt, curX, curY) {
      ctxTurt.beginPath();
      ctxTurt.fillRect(curX - turtSize/2, curY -  turtSize/2, turtSize, turtSize);
      ctxTurt.stroke();
}

function rotate(ctxTurt, curX, curY) {
    ctxTurt.clearRect(0, 0, 300, 300);
    ctxTurt.save();
    ctxTurt.translate(curX, curY);
    ctxTurt.rotate(Math.PI / 4);
    ctxTurt.fillRect(-turtSize/2, -turtSize/2, turtSize, turtSize);
    ctxTurt.restore();
    return new Point(curX, curY);
}

function blah(ctx, curX, curY, angle, length) {
    // Stroked triangle
    var rad_angle = angle * (Math.PI/180);
    ctx.beginPath();
    ctx.moveTo(curX, curY);
    var x = Math.round(curX + length * Math.sin(rad_angle));
    var y = Math.round(curY - length * Math.cos(rad_angle));
    ctx.lineTo(x, y);
    //ctx.lineTo(45,125);
    ctx.stroke();
    return new Point(x, y);
}

// if dist is negative move backward, if dist is positive move forward
function line(ctx, curX, curY, dist) {
    ctx.beginPath();
    ctx.moveTo(curX, curY);
    var x = curX
    var y = curY - dist
    ctx.lineTo(x, y);
    ctx.stroke();
    return new Point(x, y);
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function go() {
    this.draw();
};
