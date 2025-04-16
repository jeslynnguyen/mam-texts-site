document.addEventListener("DOMContentLoaded", function () {
  const langSwitcher = document.getElementById("langSwitcher");
  const langMenu = document.getElementById("langMenu");
  const langButton = document.getElementById("langButton");
  langMenu.style.display = "none";

  langSwitcher.addEventListener("mouseenter", function () {
    langMenu.style.display = "block";
    langButton.style.backgroundColor = "#d1d5db";
  });

  langSwitcher.addEventListener("mouseleave", function () {
    langMenu.style.display = "none";
    langButton.style.backgroundColor = "";
  });
});
