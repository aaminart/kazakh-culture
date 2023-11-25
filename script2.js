let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}

// Example task: Change the color of a section when clicked
const sections = document.querySelectorAll('section');
sections.forEach(section => {
  section.addEventListener('click', () => {
    section.style.backgroundColor = getRandomColor();
  });
});


document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const answers = ['A', 'C', 'A', 'A', 'C', 'B', 'A', 'A', 'A', 'B']; // Replace with correct answers
    
    let score = 0;
    const form = event.target;
    const formData = new FormData(form);
  
    for (let i = 0; i < answers.length; i++) {
      const userAnswer = formData.get(`question${i + 1}`);
      if (userAnswer === answers[i]) {
        score++;
      }
    }
  
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = `You scored ${score} out of ${answers.length}!`;
  });

  function toggleRecipe(recipeId) {
    var recipePopup = document.getElementById(recipeId);
    if (recipePopup.style.display === 'block') {
      recipePopup.style.display = 'none';
    } else {
      recipePopup.style.display = 'block';
    }
  }

  function adjustPopupWidth(recipeId, imageId) {
    const popup = document.getElementById(recipeId);
    const image = document.getElementById(imageId);
  
    if (image.complete) {
      const imageWidth = image.naturalWidth;
      const popupWidth = imageWidth + 40; // Adjust padding or margin as needed
      popup.style.width = popupWidth + 'px';
    }
  }

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});



function openNav() {
document.getElementById("Sidebar").style.width = "400px";
document.getElementById("main").style.marginLeft = "400px";
}

function closeNav() {
document.getElementById("Sidebar").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    // Add more options as needed
  });
});


function prepareSalad() {
  const ingredients = document.querySelectorAll('.salad-bowl img');
  let delay = 500; // Adjust the delay between each ingredient appearing

  ingredients.forEach(ingredient => {
    setTimeout(() => {
      ingredient.style.display = 'block';
    }, delay);
    delay += 500;
  });
}


//--music page--
