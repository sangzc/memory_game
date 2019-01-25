const cardGrid = document.getElementById("card-grid");
const cards = document.querySelectorAll('.card-container');
const images = document.getElementsByTagName('img');
const cardFrontSides = document.querySelectorAll('.card-front-side');
const cardBackSides = document.querySelectorAll('.card-back-side');
const scoreBoard = document.getElementById('score');
const resetButton = document.getElementById('reset-button');

/* -----------------SETUP CARDS LOGIC-----------------------*/

// Give all cards the same background image
for (let i=0; i<cardBackSides.length; i++) {
  cardBackSides[i].src = 'images/cardback1.jpg'
}

// All possible images 
      let imageBank = [
        'images/arya.jpg',
        'images/bran.jpg',
        'images/brienne.jpg',
        'images/bronn.jpg',
        'images/catelyn.jpg',
        'images/cersei.jpg',
        'images/daenerys.jpg',
        'images/davos.jpg',
        'images/drogo.jpg',
        'images/eddard.jpg',
        'images/ellaria.jpg',
        'images/gendry.jpg',
        'images/gilly.jpg',
        'images/highsparrow.jpg',
        'images/hodor.jpg',
        'images/jaime.jpg',
        'images/jaqen.png',
        'images/joffrey.jpg',
        'images/jon.png',
        'images/jorah.jpg',
        'images/littlefinger.jpg',
        'images/margaery.jpg',
        'images/melisandre.jpg',
        'images/missandei.png',
        'images/oberyn.png',
        'images/olenna.jpg',
        'images/osha.jpg',
        'images/podrick.jpg',
        'images/ramsay.jpg',
        'images/samwell.jpg',
        'images/sandor.jpg',
        'images/sansa.jpg',
        'images/shae.png',
        'images/theon.jpg',
        'images/tormund.jpg',
        'images/tyrion.jpg',
        'images/varys.png',
        'images/yara.jpg',
        'images/ygritte.jpg'
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

// Double the 12 images to make 24
      let imagesDoubled = [...images12,...images12];

// Shuffle cards function
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

// Shuffle images 
      let imagesShuffled = shuffleCards(imagesDoubled);

// Assigning images to card front src's - in order
      for (let i=0; i<cardFrontSides.length; i++) {
        cardFrontSides[i].src = imagesShuffled[i]
      }

/* -----------------GAME LOGIC-----------------------*/


// 1. GLOBAL VARIABLES
        
let firstCardImg = ''
let firstCardClassList = ''
let firstCardEvent 
let secondCardImg = ''
let secondCardClassList = ''
let score = 0
let matches = 0
    
// 2. Declare hasFlipped function
const hasFlipped = function(arr){
  for (let i=0; i<arr.length; i++) {
    if (firstCardImg === null) {
      return true
    }
  }
  return false
}

// 3. Declare flipCard function 
const flipCard = function(event) {
  event.target.parentElement.classList.toggle('flip');
}

// 4. Flip cards back function
const unflipCards = function(event) {
  flipCard(event);
  //quick and dirty way to do this is to do a settimeout and execute the next 
  //two lines after 1s
  secondCardClassList.remove('flipped');
  firstCardClassList.remove('flipped');
  cardGrid.addEventListener('click', memoryGame);
}

// 5. Update score function
const updateScore = function() {
  scoreBoard.innerHTML = "Score: " + score;
}

// 6. Disable click event function
const disableCards = function() {
  cardGrid.removeEventListener('click', memoryGame);
}

// Event Listener when you click on any of the cards
cardGrid.addEventListener('click', memoryGame)

function memoryGame(event) {

  // Find the image that we just we just clicked on
  let currentImage = event.target.parentNode.childNodes[1].src;
  let currentClass = event.target.className;
  let currentClassList = event.target.classList;

  // Step 1: Did we click on an already flipped card?
  if (currentClass !== "card-back-side") {

  // If true, then do nothing
  console.log('I did nothing')
    return
  } 

  // If false, then check to see if a card has already been flipped

  else if (firstCardImg === '') {

  // if no flipped cards found, then we know this is the first card to be flipped
  // 1. record firstCardImg and firstCardClassList 
  // 2. set the currentClass to 'flipped'
  // 3. do the flip animation

    flipCard(event);
    currentClassList.add('flipped');
    firstCardImg = currentImage;
    firstCardClassList = currentClassList;
    firstCardEvent = event;
    score ++;
    updateScore();

    console.log('card was set to flipped and firstCardImg = ', currentImage)

  // if a card has already been flipped, then is there a match?

  } else {

    secondCardImg = currentImage;
    secondCardClassList = currentClassList;
    
    if (firstCardImg === currentImage) {

      // Match was found!
      // 1. set the current card to be flipped
      // 2. reset firstCardImg to ''
      // 3. ***update score
      // 4. ***do animation here to let the user know they got it right
      console.log("match found!")    
      flipCard(event);
      currentClassList.add('flipped');
      firstCardImg = '';
      score ++;
      matches ++;
      updateScore();

      // Do we have a winner??
      if (matches >= 12) {
        console.log('YOU WON!!!')
      }
  
    } else {

      // Match was not found!
      //  1. keep both cards facing up for 3 seconds
      //  2. disable event listener
      //  3. flip cards over after 3 seconds
      console.log("match was not found!")
      disableCards();
      flipCard(event);
      currentClassList.add('flipped');
      setTimeout(function() {
        let tempEvent = event
        flipCard(tempEvent);
        flipCard(firstCardEvent);
        secondCardClassList.remove('flipped');
        firstCardClassList.remove('flipped');
        cardGrid.addEventListener('click', memoryGame);
      }, 1500);
      score ++;
      updateScore();
      firstCardImg = '';

    }
  }
};


