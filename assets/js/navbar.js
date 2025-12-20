// navbar.js
const navbarHTML = `
<nav>
  <div class="container">
    <div class="nav-brand">
      <a href="#" class="rainbow-text">Feds</a>
    </div>
    <div class="hamburger" id="hamburger">
      <div></div><div></div><div></div>
    </div>
    <ul id="nav-links">
      <li><a href="../index">Home</a></li>
      <li><a href="../pages/profiles/">Profiles</a></li>
      <li><a href="../pages/hoa/">HOA</a></li>
      <li><a href="../join">Discord</a></li>
    </ul>
  </div>
</nav>
`;

document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
