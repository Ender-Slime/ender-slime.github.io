// Find every area in the aboutmemap
document.querySelectorAll("#aboutmemap area").forEach(area => {
  // Change the image source on hover to data-hover
area.addEventListener("mouseover", event => {
  document.getElementById("socialbarimage").src = area.dataset.hover
})
  // Change the image source back to it's original source
area.addEventListener("mouseout", event => {
  document.getElementById("sociabarimage").src = "ASSETSABOUTME/socialbar.png"
})
})

