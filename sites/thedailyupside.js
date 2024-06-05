// Select the first element with the class "c-content-gate o-section tdu-main-body" and remove it from the DOM
document.querySelector(".c-content-gate.o-section.tdu-main-body").outerHTML = "";

// Select the first element with the class "entry-content"
var article = document.querySelector(".entry-content");

// Select all elements inside the article element
var articleContent = article.querySelectorAll("*");

// Loop through each element in articleContent and remove the filter styles if they exist
articleContent.forEach(function(element) {
    if (element.style.filter) {
        element.style.filter = ""; // Remove the filter style
        element.style.userSelect = "auto"; // Allow selecting text
        element.style.pointerEvents = "auto"; // Allow selecting text
    }
});

// Remove the gray overlay
document.body.classList.remove("content-gate");