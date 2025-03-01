// Create a file called shared-elements.js
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
      <a class="active-1" href="https://github.com/b1tranger/oUITS-Resources/releases/download/test/_oUITSr_appsgeyser.apk" 
      target="_blank"><small>web-app</small></a>
      <!-- Add other navigation links here -->
    `;
    
    // Insert the nav HTML into any element with class "navigation"
    document.querySelectorAll('.navigation').forEach(nav => {
      nav.innerHTML = navHTML;
    });
  });