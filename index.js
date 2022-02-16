// Just an Option 
const BASE_URL = "http://localhost:3000"

const mealsContainer = document.querySelector('#meals-container');
const reviewForm = document.querySelector('#review-form');
const reviewContainer = document.querySelector('#review-container');

reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank You for your review! Follow Us on Instagram!')
    reviewForm.reset();
})

let meals= [];

fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
.then(res => res.json())
.then(meals1 => {
    addToNavBar(meals1.meals[0])
})



function addToNavBar(meal){
 let mealMenu = document.querySelector('#meals-menu')
 let imgOfMeal = document.createElement('img');
 imgOfMeal.id = 'meal-menu'
 imgOfMeal.src = meal.strMealThumb;
 mealMenu.appendChild(imgOfMeal)
 imgOfMeal.addEventListener('click', e => {
     showMealDetails(meal)
 })
}

function showMealDetails(meal){
    let recipe = document.querySelector('#recipe');
    let mainImg = document.querySelector('#selectedPic')
    let mealName = document.querySelector('.name');
    let youtubeLink = document.querySelector('#youtube');

    recipe.textContent = meal.strInstructions;
    mainImg.src = meal.strMealThumb;
    mealName.textContent = meal.strMeal;
    youtubeLink.textContent = meal.strYoutube;
}


