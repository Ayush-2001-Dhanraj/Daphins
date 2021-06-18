let leftsection = document.getElementById("leftSection");
let middleSection = document.getElementById("middleSection");
let rightSection = document.getElementById("rightSection");
let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];
let closeleft = document.getElementsByClassName("closeLeft")[0];
let closeRight = document.getElementsByClassName("topNav")[0];
console.log(closeRight);

left.addEventListener("click", () => {
  leftsection.style.display = "block";
  leftsection.style.position = "absolute";
  leftsection.style.zIndex = "1";
  leftsection.classList.toggle("leftSlide");
})

closeleft.addEventListener("click", () => {
  leftsection.style.display = "none";
})

right.addEventListener("click", () => {
  rightSection.style.display = "block";
  rightSection.style.position = "absolute";
  rightSection.style.zIndex = "1";
  rightSection.classList.toggle("rightSlide");
})

closeRight.addEventListener("click", () => {
  rightSection.style.display = "none";
})
