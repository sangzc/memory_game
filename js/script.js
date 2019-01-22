var cards = document.querySelectorAll(".card-container");
var images = document.getElementsByTagName('img');
var cardFrontSides = document.querySelectorAll('.card-front-side');

console.log('hey it worked!', cardFrontSides[0].src);

// Stored images
      let imageBank = [
        'images/arya.jpg',
        'images/brienne.jpg',
        'images/bronn.jpg',
        'images/cersei.jpg',
        'images/daenerys.jpg',
        'images/hodor.jpg',
        'images/jaime.jpg',
        'images/jaqen.png',
        'images/jon.png',
        'images/podrick.jpg',
        'images/sansa.jpg',
        'images/tyrion.jpg'
      ]

// Pick 12 random cards from image bank
      let pick12images = function (arr) {
        let oldArr = arr.slice();
        let newArr = [];
        for (let i=0; i<12; i++) {
          let randomPosition = Math.floor(Math.random() * oldArr.length)
          newArr.push(oldArr[randomPosition])
          oldArr.splice(randomPosition,1)
        }
        return newArr
      }
      let images12 = pick12images(imageBank)
// Images x2
      let imagesDoubled = [...imageBank,...imageBank];

// Shuffle cards functionality
      let shuffleCards = function (arr) {
        let newArr = [];
        let oldArr = arr.slice();
        for (let i=0; i<cardFrontSides.length;i++) {
          let randomPosition = Math.floor(Math.random() * oldArr.length)
          newArr.push(oldArr[randomPosition])
          oldArr.splice(randomPosition,1)
        }
        return newArr;
      }

      // More efficient way to do this with the Fisher-Yates shuffle or Knuth
          // let pick12Random = function (cards, n) {
          //   let newCards = [];

//Shuffled images 
      let imagesShuffled = shuffleCards(imagesDoubled);

// Assigning cards to the images in order
      for (let i=0; i<cardFrontSides.length; i++) {
        cardFrontSides[i].src = imagesShuffled[i]
      }

// Flipping the cards
// cards.addEventListener('click', function (event) {
//     console.log('it worked!')
//   } false);