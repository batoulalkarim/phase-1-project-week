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

fetch



