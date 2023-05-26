let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('nav').style.top = '0';
  } else {
    document.getElementById('nav').style.top = '-450px';
  }
  prevScrollpos = currentScrollPos;
};

function toggle() {
  const hideAll = document.querySelector('#hide-all');
  const menuBar = document.querySelectorAll('.menu-burger');
  const menuX = document.querySelector('#menu-ex');

  if (menuX.style.display !== 'flex') {
    menuX.style.display = 'flex';
    for (let i = 0; i < menuBar.length; i++) {
      menuBar[i].style.display = 'none';
    }
  } else if (menuX.style.display === 'flex') {
    menuX.style.display = 'none';

    for (let i = 0; i < menuBar.length; i++) {
      menuBar[i].style.display = 'block';
    }
  }
}

// ANIMATION

// Create the observer
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('header-animation-wrapper')) {
        entry.target.classList.add('artist-text-animation');
      }

      if (entry.target.classList.contains('picture-animation-element')) {
        entry.target.classList.add('picture-animation');
      }

      if (entry.target.classList.contains('contact-animation-element')) {
        entry.target.classList.add('contact-animation');
      }
      // Add the animation class
    }
  });
  // We will fill in the callback later...
  // It's visible. Add the animation class here!
});

// Get all the `.box` from DOM and attach the observer to these
document.querySelectorAll('.header-animation-wrapper').forEach((box) => {
  observer.observe(box);
});

document.querySelectorAll('.picture-animation-element').forEach((box) => {
  observer.observe(box);
});

document.querySelectorAll('.contact-animation-element').forEach((box) => {
  observer.observe(box);
});

// observer.observe(document.querySelectorAll('.header-animation-wrapper'));
// observer.observe(document.querySelector('.header-animation-wrapper-1'));
