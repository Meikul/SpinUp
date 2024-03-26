let isScrolled = false;
const scrollThreshold = 16;

checkScrolled();
document.addEventListener('scroll', checkScrolled);

function checkScrolled() {
  // The 'scroll' event fires a lot, so check isScrolled to avoid unnecessary DOM accesses
  if (window.scrollY > scrollThreshold && !isScrolled) {
    isScrolled = true;
    document.querySelector('.navbar .navbar-title').classList.add('scrolled');
  }
  else if (window.scrollY === 0 && isScrolled) {
    isScrolled = false;
    document.querySelector('.navbar .navbar-title').classList.remove('scrolled');
  }
}