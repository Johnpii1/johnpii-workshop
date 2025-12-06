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

  

let currentPage = 1;
let lastPage = 20; // change to your total pages

function renderPages() {
  const pages = document.getElementById("pages");

  // calculate the 3 numbers to show
  let start = currentPage - 1;
  let end = currentPage + 1;

  // fix beginning
  if (currentPage === 1) {
    start = 1;
    end = 3;
  }
  if (currentPage === 2) {
    start = 1;
    end = 3;
  }

  // fix ending
  if (currentPage === lastPage) {
    start = lastPage - 2;
    end = lastPage;
  }
  if (currentPage === lastPage - 1) {
    start = lastPage - 2;
    end = lastPage;
  }

  // render
  pages.innerHTML = "";

  for (let i = start; i <= end; i++) {
    pages.innerHTML += `
      <button onclick="goToPage(${i})"
        class="${i === currentPage ? 'border border-orange-500 text-orange-500 font-bold px-3 rounded' : ''}">
        ${i}
      </button>
    `;
  }
}

function goToPage(num) {
  currentPage = num;
  renderPages();
}

renderPages();
