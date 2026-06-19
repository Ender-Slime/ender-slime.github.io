// Find every area in the document
document.querySelectorAll("area").forEach(area => {
	// Change the image source on hover to data-hover
  area.addEventListener("mouseover", event => {
    document.getElementById("titlemap").src = area.dataset.hover
  })
	// Change the image source back to it's original source
  area.addEventListener("mouseout", event => {
    document.getElementById("titlemap").src = "titleblank.png"
  })
})
