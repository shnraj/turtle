var curX = 149;
var curY = 149;
var angle = 0;

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

        ctxTurt.clearRect(0, 0, 300, 300);
        this.turt(ctxTurt, curX, curY);
    }

    if (instruction === "bk") {
        p = this.line(ctx, curX, curY, -num);
        curX = p.x;
        curY = p.y;

        ctxTurt.clearRect(0, 0, 300, 300);
        this.turt(ctxTurt, curX, curY);
    }

    if (instruction === "rt") {
        this.rotate(ctxTurt, curX, curY, num);
    }

    if (instruction === "lt") {
        this.rotate(ctxTurt, curX, curY, -num);
    }
  }
}

function turt(ctxTurt, curX, curY) {
    ctxTurt.beginPath();
    ctxTurt.fillRect(curX - turtSize/2, curY -  turtSize/2, turtSize, turtSize);
    ctxTurt.stroke();
}

function rotate(ctxTurt, curX, curY, rotate_angle) {
    ctxTurt.clearRect(0, 0, 300, 300);
    ctxTurt.save();
    ctxTurt.translate(curX, curY);
    var new_angle = angle + parseInt(rotate_angle)
    var rad_angle = new_angle * (Math.PI/180);
    ctxTurt.rotate(rad_angle);
    ctxTurt.fillRect(-turtSize/2, -turtSize/2, turtSize, turtSize);
    ctxTurt.restore();
    angle = new_angle;
}

// if dist is negative move backward, if dist is positive move forward
function line(ctx, curX, curY, length) {
    if (angle != 0) {
        // Stroked triangle
        var rad_angle = angle * (Math.PI/180);
        ctx.beginPath();
        ctx.moveTo(curX, curY);
        var x = Math.round(curX + length * Math.sin(rad_angle));
        var y = Math.round(curY - length * Math.cos(rad_angle));
    } else {
        ctx.beginPath();
        ctx.moveTo(curX, curY);
        var x = curX
        var y = curY - length
    }
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
