function initNavDrawers() {
  document.querySelectorAll('.nav-drawer').forEach((drawer) => {

    drawer.querySelector('.nav-drawer-btn').addEventListener('click', () => {
      toggleDrawer(drawer);
    });
    const mask = document.querySelector('.nav-drawer-mask');
    mask.addEventListener('click', () => {
      toggleDrawer(drawer);
    });
  });
}

function toggleDrawer(drawer) {
  const mask = drawer.querySelector('.nav-drawer-mask');
  if(drawer.dataset.open == 'true'){
    drawer.dataset.open = false;
    mask.addEventListener('transitionend', hideMask);
  }
  else {
    drawer.dataset.open = true;
    mask.style.visibility = 'visible';
  }
}

function hideMask(e) {
  e.target.style.visibility = 'hidden';
  e.target.removeEventListener('transitionend', hideMask);
}

initNavDrawers();