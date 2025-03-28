// Create a file called shared-elements.js
document.addEventListener('DOMContentLoaded', function () {
  const navHTML = `<div class="topnav-1">

    <a class="active-1" href="page-depth-01/Tutorials.html">
      <small>Resources<br>Tutorials</small>
    </a>
    <a class="active-1" href="page-depth-01/References.html">
      <small>Project<br>References</small>
    </a>
    <a class="active-1" href="page-depth-01\Blog.html">
      <small>CSE<br>Blog</small>
    </a>
    <div class="dropdown">
      <button class="dropbtn" onclick="toggleDropdown(this)">More<br>Projects</button>
      <!-- <button class="dropbtn">Quick<br>Links</button> -->
      <div class="dropdown-content">
        <a class="active-1" href="https://github.com/b1tranger/oUITS-Resources/releases/download/test/_oUITSr_appsgeyser.apk" 
      target="_blank"><small>web-app</small></a>
        <a style="color: rgb(0, 0, 0);" class="active-1" href="https://ouits-schedule.netlify.app/" target="blank">
          <small>oUITS<br>Scheduler</small>
        </a>
        <a style="color: black;" class="active-1"
          href="https://drive.google.com/drive/folders/1g93wCOUo4x0qvhNk_HHUb8Ozv_KuSLmL?usp=sharing" target="_blank">
          <small>oUITS<br>G-Drive</small>
        </a>
      </div>
    </div>

  </div>
      <!-- Add other navigation links here -->
    `;

  // Insert the nav HTML into any element with class "navigation"
  document.querySelectorAll('.navigation2').forEach(nav => {
    nav.innerHTML = navHTML;
  });
});