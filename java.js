const add = document.querySelector(".add");
const textParent2 = document.querySelector(".text-parent2");
const sub = document.querySelector(".sub");

function showAccordion() {
  sub.style.cssText = `
  display: flex;
  max-width: 40px;
  `;
  add.style.cssText = `
  display: none;
  `;
  textParent2.classList.toggle("text-parent");
}

function closeAccordion() {
  sub.style.cssText = `
  display: none;

  `;
  add.style.cssText = `
  display: flex;
  `;
  textParent2.classList.add("text-parent");
}

add.addEventListener("click", showAccordion);
sub.addEventListener("click", closeAccordion);
