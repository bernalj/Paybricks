var messages = {
  "EXTENSION_LOADED": "Loaded News Uncensorer...",
  "PAYWALL_REMOVED": "Paywall removed. Enjoy the article!"
};

console.log(messages.EXTENSION_LOADED);

// Check if the current domain is elperiodico.com or elpais.com before executing the script
if (window.location.hostname === "www.elperiodico.com") {

  // Function to remove specified text from a string
  function removeText(originalString, textToRemove) {
    // Split the original string by the text to remove
    let parts = originalString.split(textToRemove);
    
    // Join the parts back together without the removed text
    return parts.join('');
  }
  
  // Function to clean up elements with a specific class by removing specified text
  function cleanUpElPeriodico() {
    // Remove class name from element with class "ft-helper-closenews"
    var newsContainer = document.querySelector(".ft-helper-closenews");
    if (newsContainer) {
      newsContainer.classList.remove("ft-helper-closenews");
    }
  
    // Remove "closeContentEnd" from class names of elements with the class "closeContentEnd"
    var censoredParagraphs = document.getElementsByClassName("closeContentEnd");
    for (var i = 0; i < censoredParagraphs.length; i++) {
      var divClass = censoredParagraphs[i].className;
      let cleanedClass = removeText(divClass, "closeContentEnd");
      
      // Update the className property of the element to remove "closeContentEnd"
      censoredParagraphs[i].className = cleanedClass.trim(); // Trim to remove leading/trailing spaces
    }
  
    // Set innerHTML of element with id "paywall" to an empty string
    var paywallElement = document.getElementById("paywall");
    if (paywallElement) {
      paywallElement.innerHTML = "";
    }

    var paywallAd = document.getElementById("mid_news");
    if (paywallAd) {
      paywallAd.innerHTML = "";
    }

    console.log(messages.PAYWALL_REMOVED);
  
    
  }
  
  // Use setTimeout to run cleanUpElPeriodico after a delay of 1 second (1000 milliseconds)
  setTimeout(cleanUpElPeriodico, 1000);
}

// Check if the current domain is elpais.com before executing the script for El Pais
if (window.location.hostname === "elpais.com") {

  // Function to unlock El Pais content
  function unlockElPais() {
    var premiumDiv = document.getElementById("ctn_premium_article");
    var freemiumDiv = document.getElementById("ctn_freemium_article");
    
    if (premiumDiv) {
      premiumDiv.outerHTML = "";
    }
    
    if (freemiumDiv) {
      freemiumDiv.outerHTML = "";
    }
    
    var restOfArticle = document.getElementsByClassName("a_b_wall _dn")[0];
    if (restOfArticle) {
      restOfArticle.className = "a_c clearfix";
    }

    console.log(messages.PAYWALL_REMOVED);

  }
  
  // Use setTimeout to run unlockElPais after a delay of 3 seconds (3000 milliseconds)
  setTimeout(unlockElPais, 3000);
}