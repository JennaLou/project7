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
 drawing= false
})

document.addEventListener("mousemove", function(e) {
 // what do you want to do when the user presses down
 // on the mouse button?
var point = transformPoint(e)

var selectShape = document.getElementById("shapeSelect").value
var selectColor = document.getElementById("colorSelect").value
var selectSize  = document.getElementById("sizeSelct")



 if(drawing) {

   If(selectShape == "square"){

   }
   drawSquare(point.x, point.y, 15,"blue")

 }
})
