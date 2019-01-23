var cardGrid = document.getElementById("card-grid");
var cards = document.querySelectorAll('.card-container');
var images = document.getElementsByTagName('img');
var cardFrontSides = document.querySelectorAll('.card-front-side');
var cardBackSides = document.querySelectorAll('.card-back-side')

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

      

// GLOBAL VARIABLES
        
    // Declare variable to capture the lastFlipped card
          let lastFlipped = ''
    
    // Declare hasFlipped function for later
          let hasFlipped = function(arr){
            for (let i=0; i<arr.length; i++) {
              if (arr[i].childNodes[1].className === 'flipped') {
                return true
              }
            }
            return false
          }

// Event Listener when you click on any of the cards
      cardGrid.addEventListener('click', function (event) {
        
        // Find the image that we just we just clicked on
          let currentImage = event.target.parentNode.childNodes[3].src;

        // Step 1: Was a flipped card clicked?

          if (event.target.className === "card-front-side") {
            // if true, do nothing
            console.log('I did nothing')
            return
          } 

        // if false, do any cards have the class of "flipped"?

            else if (!hasFlipped(cards)) {

              // if no flipped cards found, then set current class to flipped
              // and also set the value of currentImage to the current image

                  event.target.className = 'flipped'
                  lastFlipped = currentImage
                  console.log('card was set to flipped and lastFlipped = ', lastFlipped)

               // if a card has been flipped, then are the images the same?
               // has a match been found?

                  } else if (lastFlipped === currentImage) {

                    // if a match has been found then set the clicked card to be flipped
                      console.log("match found!")    
                      event.target.className = 'flipped'
                    // **Do a little animation here to tell the user they got it right**

                    // if no match was found:
                    //  1. keep both cards facing up for 3 seconds
                    //  2. nothing is allowed to be clicked
                    //  3. flip cards over after 3 seconds

                  } else {
                    console.log("match was not found!")
                  }
                });

// Known bugs:
// 1. for some reason last else statement is not reached if a match is not found
//     same thing for if a match is found