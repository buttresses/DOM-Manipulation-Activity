function getWidth(id) {
  // Return the width of the element specified in the parameter "id"
  let screenWidth = screen.width
  let finalPrintOut = screenWidth + ' px'
  console.log(finalPrintOut)
}

// No need to change below this point.
// Note how we're using DOM elements here to display the result of the getWidth() function inside the "areaWidth" element
window.onload = () => {
  document.getElementById(('areaWidth').innerHTML = getWidth('mainDiv'));
};

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { getWidth };
}