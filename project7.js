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

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
