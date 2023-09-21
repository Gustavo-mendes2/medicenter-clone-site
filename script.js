const asideElements = document.querySelectorAll("li");
const header = document.querySelector("header");

asideElements.forEach((element, index) => {
  element.addEventListener("click", function showDetails() {
    const elementStyle =
      asideElements[index].querySelector(".asideDetails").style;
    const asideTitle = asideElements[index].querySelector(".asideTitle");

    if (elementStyle.display == "flex") {
      asideTitle.classList.remove("selectedAsideTitle");
      elementStyle.display = "none";
      asideTitle.querySelectorAll("p")[1].innerHTML = "&plus;";
    } else {
      elementStyle.display = "flex";
      asideTitle.classList.add("selectedAsideTitle");
      asideTitle.querySelectorAll("p")[1].innerHTML = "&minus;";
    }
  });
});

const mobileMenu = document.querySelector(".mobileMenu");
const navButtons = document.querySelector("nav");

mobileMenu.onclick = () => {
  if (navButtons.style.display != "none") {
    navButtons.style.display = "none";
  } else {
    navButtons.style.display = "flex";
  }
};
const watcher = new ResizeObserver((entry) => {
  if (entry[0].contentRect.right >= 970 && navButtons.style.display == "none") {
    navButtons.style.display = "flex";
  } else if (
    entry[0].contentRect.right <= 970 &&
    navButtons.style.display == "flex"
  ) {
    navButtons.style.display = "none";
  }
});

watcher.observe(header);
