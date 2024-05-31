// Get references to the premium and freemium article divs
var premiumDiv = document.getElementById("ctn_premium_article");
var freemiumDiv = document.getElementById("ctn_freemium_article");

// If the premiumDiv exists, remove its outer HTML (content)
if (premiumDiv) {
  premiumDiv.outerHTML = "";
}

// If the freemiumDiv exists, remove its outer HTML (content)
if (freemiumDiv) {
  freemiumDiv.outerHTML = "";
}

// Get the element with class "a_b_wall _dn" (assuming it represents the rest of the article)
var restOfArticle = document.getElementsByClassName("a_b_wall _dn")[0];

// If restOfArticle is found, update its class name to "a_c clearfix"
if (restOfArticle) {
  restOfArticle.className = "a_c clearfix";
}

// Inject the window.ENP overrider
const script = document.createElement('script');
script.src = chrome.runtime.getURL("sites/elpais_inject.js");
document.documentElement.appendChild(script);
script.onload = function() {
  this.remove();  // Clean up the script element after it has executed
};

// Log a message indicating that the paywall has been removed
console.log("Paywall removed for " + window.location.href);