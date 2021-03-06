var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newsquare = document.createElementNS(namespace, "rect")
   newsquare.setAttribute("x", x)
   newsquare.setAttribute("y", y)
   newsquare.setAttribute("width", size)
   newsquare.setAttribute("height", size)
   newsquare.setAttribute("fill", color)
   screen.appendChild(newsquare)

}

function drawCircle(x,y,size,color){
  var newcircle = document.createElementNS(namespace, "circle")
  newcircle.setAttribute("cx", x)
  newcircle.setAttribute("cy", y)
  newcircle.setAttribute("r", size)
  newcircle.setAttribute("fill", color)
  screen.appendChild(newcircle)
}

var drawing = false
// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?ss
 drawing = true
})

document.addEventListener("mouseup", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?
 drawing = false
})

document.addEventListener("mousemove", function(e) { 
 // what do you want to do when the user presses down
 // on the mouse button?
 var point = transformPoint(e)

//////selecting it on html//////
var selectShape = document.getElementById("shapeSelect").value
var selectColor = document.getElementById("colorSelect").value
var selectSize  = document.getElementById("sizeSelect").value

////this code is besicallly drawing on your  thing////
 if(drawing) {
/////this type of code is basically drawing your circle. Moving it on x and y  axis. Also the selectsize and selectcolor when youre selecting something for circle////
   if(selectShape == "circle") {
  drawCircle(point.x, point.y, selectSize ,selectColor)
   }
else {
   drawSquare(point.x, point.y, selectSize ,selectColor)
}
///same thing as this code////
 }})
