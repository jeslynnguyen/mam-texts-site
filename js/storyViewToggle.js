document.addEventListener("DOMContentLoaded", function () {
  const ipa = document.getElementById("ipa");
  const defaultView = document.getElementById("default");
  const ortho = document.getElementById("ortho");
  const story = document.getElementById("story");
  const radios = document.getElementsByName("storyViewGroup");

  function clearViews() {
    ipa.style.display = "none";
    defaultView.style.display = "none";
    ortho.style.display = "none";
    story.style.display = "none";
  }

  function updateView() {
    var selected = document.querySelector(
      "input[name=storyViewGroup]:checked",
    ).value;
    clearViews();
    document.getElementById(selected).style.display = "block";
  }

  updateView();
  for (const btn of radios) {
    btn.addEventListener("click", updateView);
  }
});
