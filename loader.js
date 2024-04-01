function initSpinners() {
  document.querySelectorAll('.loader-blob').forEach((blobLoader) => {
    blobLoader.addEventListener('mousemove', (e) => {
      const target = e.target.closest('.loader-blob');
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - (target.clientWidth / 2);
      const y = e.clientY - rect.top - (target.clientHeight / 2);
      blobLoader.querySelector('.follower').style.setProperty('--follower-x', `${x * 0.6}px`);
      blobLoader.querySelector('.follower').style.setProperty('--follower-y', `${y * 0.6}px`);
    });
    blobLoader.addEventListener('mouseleave', () => {
      blobLoader.querySelector('.follower').style.setProperty('--follower-x', `0px`);
      blobLoader.querySelector('.follower').style.setProperty('--follower-y', `0px`);
    })
  });
}

initSpinners();