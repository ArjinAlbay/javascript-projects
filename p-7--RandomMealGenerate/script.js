let btn = document.getElementById("btn");
let foodName = document.getElementById("foodName");
let firstSection = document.getElementById("firstSection");
let image = document.getElementById("image");
let description = document.getElementById("description");
let country = document.getElementById("country");
let category = document.getElementById("category");
let video = document.getElementById("video");
let list = document.getElementById("list");


btn.addEventListener("click", getFood);

async function getFood() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const foods = await response.json();
   
    const data = foods.meals[0];
    
    firstSection.classList.remove('justify-center', 'text-center');

    foodName.innerHTML = data.strMeal;
    image.innerHTML = `<img id="image" src="${data.strMealThumb}" alt="" width="400" height="400" >`
    description.innerHTML = data.strInstructions;
    country.innerHTML = data.strArea
    category.innerHTML = data.strCategory
    video.innerHTML = `<iframe width="420" height="315"
    src="https://www.youtube.com/embed/${data.strYoutube.slice(-11)}">
    </iframe>`

let foodIngredient = []



    for (let i = 1; i <= 20; i++) {
        
      if(data[`strIngredient${i}`])
      {

        foodIngredient.push(`${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`);
      }else {
        break
      }
    }

console.log(foodIngredient)

   list.innerHTML= `
   <h1 class="text-2xl font-semibold "> Ingredients and Measures </h1>
 
    ${ foodIngredient.map(e => `<li>${e}</li>`).join("")}`
   
  }

 

 


