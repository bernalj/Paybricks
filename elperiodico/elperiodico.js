//
// Helper Functions
//

// Function to remove specified text from a string
function removeText(originalString, textToRemove) {
  // Split the original string by the text to remove
  let parts = originalString.split(textToRemove);
  
  // Join the parts back together without the removed text
  return parts.join('');
}

//
// Instant Functions
//

// Remove class name from element with class "ft-helper-closenews"
var newsContainer = document.getElementsByClassName("ft-helper-closenews")[0];
if (newsContainer) {
  newsContainer.className = "";
}

// Remove "closeContentEnd" from class names of elements with the class "closeContentEnd"
// Iterates through all the paragraphs of an article and shows them
var censoredParagraphs = document.getElementsByClassName("closeContentEnd");

for (var i = 0; i < censoredParagraphs.length; i++) {
  var divClass = censoredParagraphs[i].className;

  let cleanedClass = removeText(divClass, "closeContentEnd");
  
  // Update the className property of the element to remove "closeContentEnd"
  censoredParagraphs[i].className = cleanedClass.trim(); // Trim to remove leading/trailing spaces
}

//
// Timed functions
//

function removePaywallDiv(){
  // Set innerHTML of element with id "paywall" to an empty string
  var paywallContainer = document.getElementById("paywall");

  if (paywallContainer){
    document.getElementById("paywall").innerHTML = "";
  }
}

setTimeout(removePaywallDiv, 1000);


function removeReportajePaysplash() {
  // Get the first element with the specified class name
  var paysplashContainer = document.getElementsByClassName("tp-iframe-wrapper tp-active")[0];

  // Check if paysplashContainer is not undefined or null
  if (paysplashContainer) {
    // If paysplashContainer exists, remove it from the DOM by setting its outerHTML to an empty string
    paysplashContainer.outerHTML = "";
  }

  var transparentLayout = document.getElementsByClassName("tp-modal")[0];
  if (transparentLayout){
    transparentLayout.outerHTML = "";
  }
}

// Set a timeout to call the removeReportajePaysplash function after 1000 milliseconds (1 second)
setTimeout(removeReportajePaysplash, 1000);

// Log a message indicating that the paywall has been removed
console.log("Paywall removed for " + window.location.href);