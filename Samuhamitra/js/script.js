document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(page => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
}



displayLabourProfiles();

function autoScrollSlider(sliderId) {
  const slider = document.getElementById(sliderId);
  let scrollAmount = 0;
  const scrollSpeed = 2; // Adjust scroll speed

  function scrollSlider() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollLeft = scrollAmount;
  }

  setInterval(scrollSlider, 30); // Adjust interval time for smoothness
}

document.addEventListener("DOMContentLoaded", function () {
  autoScrollSlider("activity-slider");
  autoScrollSlider("community-slider");
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
}