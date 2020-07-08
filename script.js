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
images[13] = "elehpant.jpeg"
images[14] = "monkey.jpg"
images[15] = "frog.jpg"
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
    cell.tag = x
    x++
  }
}

var count = 0

var previous = null

function flipCell() {
    //console.log("TAG: " + this.kavin)
    this.style.backgroundImage = "url('" + images[this.tag] + "')"
    count++
    if ((count % 2) == 0) {
        var current = this
        setTimeout(function() {
            // lines here will execute after 1000 milliseconds or 1 second
            current.style.backgroundImage = null
            previous.style.backgroundImage = null
        }, 1000);
    } else {
        previous = this
    }
}