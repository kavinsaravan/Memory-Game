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
images[8] = "zebra.jpg"
images[9] = "lion.jpg"
images[10] = "bear.jpg"
images[11] = "dog.jpeg"
images[12] = "fox.jpg"
images[13] = "turtle.jpeg"
images[14] = "giraffe.jpg"
images[15] = "rabbit.jpg"
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
    console.log("CELL: " + cell.kavin)
    cell.onclick = flipCell
    cell.style.backgroundImage = "url('" + images[x] + "')"
    console.log("IMAGE: " + cell.style.backgroundImage)
    cell.style.backgroundPosition = "center center"
    x++
  }
}


function flipCell() {
  console.log("TAG: " + this.kavin)
  this.style.backgroundColor = "green"
  //alert("hello")
}