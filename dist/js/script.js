const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownList = document.querySelector("#dropdownList");

dropdownButton.addEventListener("click", function () {
  dropdownList.classList.toggle("hidden");
});
