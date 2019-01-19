var cards = document.querySelectorAll(".card-container");
var images = document.getElementsByTagName('img');
var cardFontSides = document.querySelectorAll('.card-front-side');

console.log('hey it worked!', cardFontSides[0].src);
// Stored images
//       let imageBank = [
//         {arya: }
//       ]

// Pick 12 random ones from the bank

// Images x2
//       let imageBankDouble = [...imageBank,...imageBank];

// Randomly assigning images functionality
//       let shuffleCards = function () {

//       }

// Shuffled images 
//       var shuffledDeck = shuffleCards(imageBankDouble);

// Assigning cards to the images in order
      for (let i=0; i<=cardFrontSides.length; i++) {
        cardFrontSides[1].src = shuffledDeck[i]
      }





// Flipping the cards
// cards.addEventListener('click', function (event) {
//     console.log('it worked!')
//   } false);