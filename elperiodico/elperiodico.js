// Function to remove specified text from a string
function removeText(originalString, textToRemove) {
  // Split the original string by the text to remove
  let parts = originalString.split(textToRemove);
  
  // Join the parts back together without the removed text
  return parts.join('');
}

// Set innerHTML of element with id "paywall" to an empty string
document.getElementById("paywall").innerHTML = "";

// Remove class name from element with class "ft-helper-closenews"
var newsContainer = document.getElementsByClassName("ft-helper-closenews")[0];
if (newsContainer) {
  newsContainer.className = "";
}

// Remove "closeContentEnd" from class names of elements with the class "closeContentEnd"
var censoredParagraphs = document.getElementsByClassName("closeContentEnd");

for (var i = 0; i < censoredParagraphs.length; i++) {
  var divClass = censoredParagraphs[i].className;

  let cleanedClass = removeText(divClass, "closeContentEnd");
  
  // Update the className property of the element to remove "closeContentEnd"
  censoredParagraphs[i].className = cleanedClass.trim(); // Trim to remove leading/trailing spaces
}

// Log a message indicating that the paywall has been removed
console.log("Paywall removed for " + window.location.href);