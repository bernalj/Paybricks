// This file is required to avoid Content Security Policy (CSP) of the website, 
// which restricts the execution of inline scripts.
// It overrides window.ENP to a blank object to avoid a popup showing up.

(function() {
    // Function to set window.ENP to an empty object
    function setENP() {
      Object.defineProperty(window, 'ENP', {
        value: {
          "globalContent": {
            "website": "el-pais"
          },
          "translations": {
            "sharedBar": {
              "copyLink": "Enlace copiado"
            }
          }
        },
        writable: true,  // Allow further modifications if needed
        configurable: true  // Allow further configurations if needed
      });
      
      console.log('window.ENP has been replaced');

      Object.defineProperty(window, "isLoggedIn", {
        value: false,
        writable: true,  // Allow further modifications if needed
        configurable: true  // Allow further configurations if needed
      });

      console.log('isloggedin has been set');
    }
  
    // Execute the function to set window.ENP
    setENP();
  
    // Optionally, continuously check and reset window.ENP to ensure it stays as an empty object
    const interval = setInterval(() => {
      if (window.ENP && Object.keys(window.ENP).length !== 0) {
        setENP();
      }
    }, 100); // Check every 100 milliseconds
  
    // Stop checking after 4 seconds
    setTimeout(() => clearInterval(interval), 4000);
  })();