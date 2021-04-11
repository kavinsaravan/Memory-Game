// store images in an array
var images = Array(16)
images[0] = "cat.jpg"
images[1] = "cheetah.jpg"
images[2] = "monkey.jpeg"
images[3] = "eagle.jpg"
images[4] = "frog.jpg"
images[5] = "elephant.jpg"
images[6] = "cow.jpeg"
images[7] = "horse.jpg"
images[8] = "horse.jpg"
images[9] = "eagle.jpg"
images[10] = "cat.jpg"
images[11] = "cow.jpeg"
images[12] = "cheetah.jpg"
images[13] = "elephant.jpg"
images[14] = "monkey.jpeg"
images[15] = "frog.jpg"

shuffle(images)

// 1. go through all the cells in the table
var table = document.getElementById("gametable")

// 2. for each cell, attach the onclick listener
var x = 0
for (i = 0; i < table.rows.length; i++){
  var row = table.rows[i]
  for (j = 0; j < row.cells.length; j++){
    var cell = table.rows[i].cells[j]
    //cell.style.backgroundColor = "green"
    cell.kavin = "row " + i + " / col " + j 
    //console.log("CELL: " + cell.kavin)
    cell.onclick = flipCell

    //cell.style.backgroundImage = "url('" + images[x] + "')"
    //console.log("IMAGE: " + cell.style.backgroundImage)
    cell.style.backgroundPosition = "center center"
    cell.style.backgroundSize = "cover"
    cell.id = x
    cell.setAttribute("image", images[x])
    //cell.tag = x
    x++
  }
}

// global variables
var count = 0
var previousTag = ""
var score = 0

function resetCells(prevTag, currTag) {
    var prev = document.getElementById(prevTag)
    var curr = document.getElementById(currTag)
    var currImage = curr.getAttribute("image")
    var prevImage = prev.getAttribute("image")
    if (currImage != prevImage) {
        curr.style.backgroundImage = null
        prev.style.backgroundImage = null
    }
}
var waiting = false
// called on each cell click
function flipCell() {
    if (waiting == true) {
        return 
    }
    var currentTag = this.id
    //console.log("CT: " + currentTag)
    var current = document.getElementById(currentTag)
    var isDone = current.getAttribute("done")
    if (isDone == "true") {
      return
    }
    var tagIndex = parseInt(currentTag)
    this.style.backgroundImage = "url('" + images[tagIndex] + "')"
    count++
    if ((count % 2) == 0) {
        var currentImage = this.getAttribute("image")
        var previous = document.getElementById(previousTag)
        var previousImage = previous.getAttribute("image")
        if (currentImage == previousImage) {
            score = score + 10
            document.getElementById("score").innerHTML = score
            current.setAttribute("done", "true")
            previous.setAttribute("done", "true")
        } else {
          waiting = true
          var delayedClear = setTimeout(function() {
              resetCells(previousTag, currentTag)
              waiting = false
          }, 500);
        }
    } else {
        if (delayedClear != undefined) {
           clearTimeout(delayedClear)
           resetCells(previousTag, currentTag)
        }
        previousTag = currentTag
        
    }
}

function shuffle(a) {//this is the function shuffle
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [a[i], a[j]] = [a[j], a[i]]; 
    }
    return a; //return the product
}
