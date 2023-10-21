let butonabak = document.querySelector("button");

butonabak.addEventListener("click", getFood);


async function getFood() {
    const response = await fetch("https://dietagram.p.rapidapi.com/apiFood.php?name=Jab%C5%82ko&lang=pl");
    const foods = await response.json();
    console.log(foods);
  }