// This file is required to avoid Content Security Policy (CSP) of the website, 
// which restricts the execution of inline scripts.
// It overrides window.ENP to a blank object to avoid a popup showing up.

(function() {
    // Function to set window.ENP to an object that can be read
    function fudgeVerification() {
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

      // Override the PMWall variable so that the paywall library cannot load      
      Object.defineProperty(window, 'PMWall', {
        value: {  },
        writable: false,  // Allow further modifications if needed
        configurable: false  // Allow further configurations if needed
      });

      console.log('PMWall has been set as blank');
    }
  
    // Execute the function to set window.ENP and other global variables
    fudgeVerification();

  })();