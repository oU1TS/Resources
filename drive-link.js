// Create a file called shared-elements.js
document.addEventListener('DOMContentLoaded', function() {
    const navHTML = `
      <a href="https://drive.google.com/drive/folders/1iLo7FAsyDo2g9N3hvmO52ndDtsvTunWB"
                        target="_blank">
                        G-Drive Archive
                    </a>
      <!-- Add other navigation links here -->
    `;
    
    // Insert the nav HTML into any element with class "navigation"
    document.querySelectorAll('.navigation2').forEach(nav => {
      nav.innerHTML = navHTML;
    });
  });