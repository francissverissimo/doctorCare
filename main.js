window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  changeNavOnScroll();
  showBackToTopButtonOnScroll();
}

function changeNavOnScroll() {
  const navigation = document.querySelector("#navigation");

  scrollY > 10
    ? navigation.classList.add("scroll")
    : navigation.classList.remove("scroll");
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector("#backToTopButton");

  scrollY > 1299
    ? backToTopButton.classList.add("show")
    : backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

// ScrollReveal
ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 600,
}).reveal(`
  #home header, #home .content, #home .numbers,
  #services header, #services .card,
  #about header h4, #about header h2, #about .content p,
  #about .content img`);
