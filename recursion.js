// Setup Canvas

function setup(){
  createCanvas(500, 500)
  
}

// Draw Rectangles
function draw(){
  draw_fractal(0,0,width,height,3)
}

// Draw Fractal
function draw_fractal(x,y,w,h,depth) {
  var color_fill = random(0,1)
  if (color_fill > 0.7) {
    fill(random(0,255),random(0,255),random(0,255))
  } else {
    fill(255,255,255)
  }
  strokeWeight(5 * depth)
  stroke(random(0,255),random(0,255), random(0,255))
  
  rect(x,y,w,h)
  if (depth > 0) {
    var xSplit = random(0,1)
    var ySplit = random(0,1)

    // Top Left Square
    draw_fractal(x,y, w * xSplit, h * ySplit, depth-1)
    // Top Right Square
    draw_fractal(x + w*xSplit, y, w - w*xSplit, h * ySplit, depth-1)
    // Bottom Left Square
    draw_fractal(x, y + h*ySplit, w*xSplit, h - h*ySplit, depth-1)
    // Bottom Right Square
    draw_fractal(x + w*xSplit, y + h*ySplit, w - w*xSplit, h - h*ySplit, depth-1)
  }
}