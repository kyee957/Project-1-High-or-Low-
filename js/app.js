
// Each of the two players are given 3 cards from a standard deck and a deck of cards


// Players must decide if their mystery card will be higher or lower 

// Players take turn when a player loses/wins a round. 

// If a player guesses incorrectly, they must restart the round they are currently in. 

// If a player guesses correctly on all 3 cards show on the table, 
// they will go onto the next round. 

// Game ends when a player is able to pass a total of 3 rounds.


// create standard deck of cards
const myDeck = [
  {
    name: "spades-two", //spades
    value: 2
  }, {
    name: "spades-three",
    value: 3
  }, {
    name: "spades-four",
    value: 4
  }, {
    name: "spades-five",
    value: 5
  }, {
    name: "spades-six",
    value: 6
  }, {
    name: "spades-seven",
    value: 7
  }, {
    name: "spades-eight",
    value: 8
  }, {
    name: "spades-nine",
    value: 9
  }, {
    name: "spades-ten",
    value: 10
  }, {
    name: "spades-jack",
    value: 11
  }, {
    name: "spades-queen",
    value: 12
  }, {
    name: "spades-king",
    value: 13
  }, {
    name: "spades-ace",
    value: 14
  }, {       
    name: "hearts-two", // Hearts
    value: 2
  }, {
    name: "hearts-three",
    value: 3
  }, {
    name: "hearts-four",
    value: 4
  }, {
    name: "hearts-five",
    value: 5
  }, {
    name: "hearts-six",
    value: 6
  }, {
    name: "hearts-seven",
    value: 7
  }, {
    name: "hearts-eight",
    value: 8
  }, {
    name: "hearts-nine",
    value: 9
  }, {
    name: "hearts-ten",
    value: 10
  }, {
    name: "hearts-jack",
    value: 11
  }, {
    name: "hearts-queen",
    value: 12
  }, {
    name: "hearts-king",
    value: 13
  }, {
    name: "hearts-ace",
    value: 14
  }, {
    name: "diamonds-two", // Diamonds
    value: 2
  }, {
    name: "diamonds-three",
    value: 3
  }, {
    name: "diamonds-four",
    value: 4
  }, {
    name: "diamonds-five",
    value: 5
  }, {
    name: "diamonds-six",
    value: 6
  }, {
    name: "diamonds-seven",
    value: 7
  }, {
    name: "diamonds-eight",
    value: 8
  }, {
    name: "diamonds-nine",
    value: 9
  }, {
    name: "diamonds-ten",
    value: 10
  }, {
    name: "diamonds-jack",
    value: 11
  }, {
    name: "diamonds-queen",
    value: 12
  }, {
    name: "diamonds-king",
    value: 13
  }, {
    name: "diamonds-ace",
    value: 14
  }, {
    name: "clubs-two", // Clubs
    value: 2
  }, {
    name: "clubs-three",
    value: 3
  }, {
    name: "clubs-four",
    value: 4
  }, {
    name: "clubs-five",
    value: 5
  }, {
    name: "clubs-six",
    value: 6
  }, {
    name: "clubs-seven",
    value: 7
  }, {
    name: "clubs-eight",
    value: 8
  }, {
    name: "clubs-nine",
    value: 9
  }, {
    name: "clubs-ten",
    value: 10
  }, {
    name: "clubs-jack",
    value: 11
  }, {
    name: "clubs-queen",
    value: 12
  }, {
    name: "clubs-king",
    value: 13
  }, {
    name: "clubs-ace",
    value: 14
  }
]


//first steps 
//build out the player class
//    -what does every player have that stays the same?
//    -what does each player have that is unique?
//    -does each player need to have a property that tells if it is their turn or not?


//Next steps
//Build out game functionality, in small pieces, get it working in the console.

//maybe you have a boolean k:v pair that says if the game is active or not
//so that it switches to active when the start button is pressed
//and then when it's active, you show the cards. 

//Hint: make a class in your css called 'hidden' and make it visually hide anything
//  with that class.


//buttons that show up for each card. So maybe they're all part of the same div? or whatever helps you get the info of the button, sending to the associated card.
class Player {
  constructor(name) {
    this.name = name
    this.score = 0
    this.hand = []
    this.turn = false
  }


}
//at the start of the game, you will changeplayer one's turn to truelike this
// Fatima.turn = true 

//then at the end of their turn it will become false like this
// Fatima.turn = false
//Then player 2 is up, you'll need to change their turn value to true.
//Nate.turn = true


//game.changeTurn is going to be a function that switches the boolean value of the current, and the next playe

const playerOne = new Player("Fatima")
const playerTwo = new Player("Nate")
console.log(playerOne);
console.log("Fatima's turn is \n", playerOne.turn);

playerOne.turn = true
console.log("NOW, Fatima's turn is \n", playerOne.turn);

console.log(playerTwo);

let playing = false;
let startButton = false;


//object
const game = {

  

  rounds: 0,
  match: 0,
  players: [],
  deck: Array.from(myDeck), //insert deck of cards into game object

  whoseTurnPlayerIndex: 0,
  // phase
  // right hand card

  // track how many phases each player has completed

// this.players[0].name
//inside a loop you might say this.players[i].name


  addName: function(name) {
      const newPlyr = new Player(name);
      this.players.push(newPlyr);
      //this.players.name = //the value you get from the form input
      const newPlayerName = document.createElement("li");
      newPlayerName.classList.add = "name";
      newPlayerName.innerText = `Name: ${name}`;
      const ul = document.querySelector("#name-entry");
      ul.append(newPlayerName);
    
  },

  nextPlayer: function () {
    // come back to this later
  },

  start: function() {
    console.log("Start button was clicked")
    // set phase

    // deal 3 cards to player 0 (hard code for now) -- call function below
    // deal/set right card -- this needs to be tracked

    // say "click high low to guess"
    
    // show buttons 
      // cycle through cards in this phase -- nextCard() method?
  },



  // draw 3 cards to players
  putCardsOnHand: function (playerIndex) {
      for(let i = 0; i < 3; i++){ //draw 3 cards to playerOne and playerTwo, randomize
          let drawCardsForPlayr = (Math.floor(Math.random() * this.deck.length))
          console.log('random card:')
          console.log(drawCardsForPlayr)
          console.log(this.deck[drawCardsForPlayr])
          this.players[playerIndex].hand.push(this.deck[drawCardsForPlayr])
          this.deck.splice(drawCardsForPlayr, 1)
      }
  },

// how can I optimize the method's function?
// abstract but powerful with use of paramaters
// make similar method as drawCards but for the deck of cards next to the 3 cards.
// make another property instead of hand


  drawMysteryCard: function (playerIndex) {
      for(let i = 0; i < 1; i++){ //draw 1 mystery card from deck to playerOne and playerTwo, randomize
          let oneCardFrmDeck = (Math.floor(Math.random() * this.deck.length))
          console.log('you drew card:')
          console.log(oneCardFrmDeck)
          console.log(this.deck[oneCardFrmDeck])
          this.players[playerIndex].hand.push(this.deck[oneCardFrmDeck])


    }

  },



  renderDeck: function (myDeck) {
      document.getElementById("card-container").innerHTML = "";

    for(let i = 0; i < myDeck.length; i++) {
      let revealCards = document.createElement("div");
        card.className = "reveal-card" + myDeck[i].name;
      }
  },






}

// console.log(game.drawCards());

const addPlayerButton = document.querySelector("#AddName")

addPlayerButton.addEventListener("click", (event) => {
  
  event.preventDefault();
  console.log("event");
  console.log(event);
  console.log("this is the event target from the name form\n", event.target);
  game.addName(event.target)
  

});

//////////////////////////
//BELOW THE GAME OBJECT
//PUT EVENT LISTENERS
//one for the form input,
//eventually you'll need others for other parts of the game. e.g. start button and other stuff




// add event listener
// use class to create objects
// push those to game player Array
// use array to compare values to each player


// High or low button functioning
// Players can draw cards from deck
// Moving from phase to phase




