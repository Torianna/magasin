
//adding listener for every accordion's element
const accordion = document.getElementsByClassName("accordion");
const panels = document.getElementsByClassName("panel");
Array.from(accordion).forEach(element => {
  element.addEventListener("click", (e) => changeAccordion(e))
});

Array.from(panels).forEach(panel => {
  panel.style.maxHeight = panel.scrollHeight + "px";
});

//changing state after click
changeAccordion = (e) =>{
  e.currentTarget.classList.toggle("active");
  e.currentTarget.lastElementChild.classList.toggle("rotated");
  const panel = e.currentTarget.nextElementSibling;
  if (!panel.style.maxHeight || panel.style.maxHeight === "0px") {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } else {
    panel.style.maxHeight = "0";
  }
}