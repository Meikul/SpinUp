let exScrolled = false;
const exScrollThreshold = 16;
const navbarExample = document.querySelector('.filler-example');

exCheckScrolled();
navbarExample.addEventListener('scroll', exCheckScrolled);

function exCheckScrolled() {
  // The 'scroll' event fires a lot, so check exScrolled to avoid unnecessary DOM accesses
  if (navbarExample.scrollTop > exScrollThreshold && !exScrolled) {
    exScrolled = true;
    document.querySelector('.navbar-example .navbar .navbar-title').classList.add('scrolled');
  }
  else if (navbarExample.scrollTop === 0 && exScrolled) {
    exScrolled = false;
    document.querySelector('.navbar-example .navbar .navbar-title').classList.remove('scrolled');
  }
}

document.querySelectorAll('.code-block-show').forEach((show) => {
  show.addEventListener('click', (e) => {
    const block = e.target.closest('.code-block');
    block?.classList.toggle('collapsed');
    block?.classList.toggle('expanded');
  });
});

document.querySelectorAll('.code-block .copy-content').forEach((icon) => {
  icon.addEventListener('click', (e) => {
    const content = icon.closest('.code-block').querySelector('pre').innerText;
    navigator.clipboard.writeText(content);
  })
})

document.getElementById('navbar-html').innerText = `<header class="navbar translucent">
  <a href="#" class="navbar-title size-changing">SpinUp</a>
  <nav class="navbar-links">
    <a href="#">Normal Link</a>
    <a href="#" class="active-link">Active Link</a>
    <a href="#">Normal Link</a>
    <a href="#">Normal Link</a>
  </nav>
</header>`;

document.getElementById('carousel-html').innerText = `<div class="carousel" data-duration="5000">
  <img src="images/big_wall.jpg" alt="Man looking up at a big canyon wall">
  <img src="images/cloudy_cliff.jpg" alt="Mountain peak surrounded by clouds">
  <img src="images/logan_canyon.jpeg" alt="fall leaves">
  <img src="images/logan.jpeg" alt="road through fall leaves">
  <img src="images/zion.jpeg" alt="a view down a red rock canyon">
  <div class="indicator"></div>
</div>`;

document.getElementById('button-html').innerText = `<button class="btn">Button</button>
<button class="btn">Icon Button<span class="material-symbols-outlined">arrow_forward</span></button>
<button class="btn fab"><span class="material-symbols-outlined">add</span></button>`;

document.getElementById('nav-drawer-html').innerText = `<div class="nav-drawer translucent">
  <button class="nav-drawer-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path fill="#fafafa" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
  </button>
  <nav class="nav-drawer-panel">
    <a href="#">Normal Link</a>
    <a href="#" class="active-link">Active Link</a>
    <a href="#">Normal Link</a>
    <a href="#">Normal Link</a>
  </nav>
  <div class="nav-drawer-mask"></div>
</div>`;

document.getElementById('loader-html').innerText = `<!-- Text Ring Loader -->
<!-- SVG curved text technique taken from Jhey Tompkins https://dev.to/jh3y/circular-text-with-css-57jf -->
<svg class="loader-text-ring" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path id="circlePath" fill="none" d="
        M 10, 50
        a 40,40 0 1,1 80,0
        a 40,40 0 1,1 -80,0
      " />
  <text id="text" fill="rgb(var(--foreground))">
    <textPath id="textPath" href="#circlePath">Loading·Loading·Loading·</textPath>
  </text>
</svg>

<!-- Squircle Loader -->
<div class="loader-squircle"></div>

<!-- Blob Loader -->
<div class="loader-blob">
  <div class="follower"></div>
</div>`;