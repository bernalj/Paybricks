// This file is required to avoid Content Security Policy (CSP) of the website, 
// which restricts the execution of inline scripts.
// It executes _an.showMsg("") every second to remove AdBlocker popup.

(function() {
    // Function to remove AdBlocker popup by executing _an.showMsg("")
    function removeAdBlockerPopup() {
        try {
            // Check if _an object exists and has showMsg method
            if (typeof _an !== 'undefined' && typeof _an.showMsg === 'function') {
                _an.showMsg("");
            }
        } catch (error) {
            // Silently handle any errors to avoid console spam
        }
    }

    // Execute the AdBlocker popup removal every 1 second
    setInterval(removeAdBlockerPopup, 1000);
    
    console.log('ElPeriodico AdBlocker popup remover initialized');
})();
