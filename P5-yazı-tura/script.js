let param = document.querySelector(".para");
let selamm = document.querySelector(".selam");

selamm.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  param.style.animation = "none";

  if (i) {
    setTimeout(() => {
      param.style.animation = "spin-back 1s forwards ";
      document.querySelector(".sonuc").textContent = `yazı`;
    }, 100);
  } else {
    setTimeout(() => {
      param.style.animation = "spin-front 1s forwards";
      document.querySelector(".sonuc").textContent = `tura`;
    }, 100);
  }
});
