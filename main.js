function onScroll() {
  const navigation = document.querySelector("#navigation");

  if (scrollY > 10) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
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
