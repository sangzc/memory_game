var cards = document.querySelectorAll(".card-container");
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

// Flipping the cards
      // cards.addEventListener('click', function (event) {
      //     console.log('it worked!')
      //   } false);