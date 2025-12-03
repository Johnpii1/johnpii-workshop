//FOR SLIDE
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.slider').forEach(slider => {
    const container = slider.parentElement;
    const next = container.querySelector('.nextBtn');
    const back = container.querySelector('.backBtn');

    if (!next || !back) return;

    next.addEventListener('click', () => {
      slider.scrollBy({ left: 260, behavior: 'smooth' });
    });

    back.addEventListener('click', () => {
      slider.scrollBy({ left: -260, behavior: 'smooth' });
    });
  });
});


//DROPDOWN
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  // Toggle menu open/close
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // stop click from triggering the close event
    menu.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden")) {
      // if menu is open...
      const isClickInsideMenu = menu.contains(e.target);
      const isClickOnBtn = menuBtn.contains(e.target);

      if (!isClickInsideMenu && !isClickOnBtn) {
        menu.classList.add("hidden");
      }
    }
  });


  
  



