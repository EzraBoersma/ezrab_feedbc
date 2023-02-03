/**
 * The comments through this file indicate the expected functionality
 * required to complete the exercise.
 */

/**
 * This is the base Animal class; all Rabbits will extend this class.
 */
class Animal {
  constructor(name) {
    this._speed = 0;
    this._name = name;
  }

  getSpeed() {
    return this._speed;
  }

  getName() {
    return this._name;
  }
}

/**
 * This is the Rabbit class; all new Rabbits that are created will call the
 * constructor of this class to instantiate a new rabbit object.
 */
class Rabbit extends Animal {
  constructor(name) {
    super(name);
  }

  hop(speed) {
    // Prevent negative numbers from interferring with speed
    if (speed < 0) throw new Error("Negative speed!");

    this._speed += speed;
  }

  stop() {
    this._speed = 0;
  }

  getRacerId() {
    return this._name.toLowerCase().replace(/\s+/, "-");
  }
}

// Declare two global variables:
// - one to house all rabbit instances
let rabbitArr = [];

// - one to store the timer id from setInterval
let timerId = 0;

function getRandomSpeed() {
  // Return a random whole number between 1 and 10
  return Math.floor(Math.random() * 11);
}

function initRace() {
  document.getElementById("stopBtn").disabled = false;
  // Enable the Stop button

  // Create 4 new Rabbit instances with names like 'Rabbit 1' through to 'Rabbit 4'.
  // Remember: the name is passed to the constructor!
  rabbit1 = new Rabbit("Rabbit 1");
  rabbit2 = new Rabbit("Rabbit 2");
  rabbit3 = new Rabbit("Rabbit 3");
  rabbit4 = new Rabbit("Rabbit 4");

  rabbitArr = [rabbit1, rabbit2, rabbit3, rabbit4];
  console.warn(rabbitArr);
  // Create a global array containing all of the rabbit objects you created above.

  timerId = setInterval(() => {
    // Assign the timer id that is returned from the setInterval call above, with 500ms intervals to the global variable `timer`

    for (let rabbit of rabbitArr) {
      // Loop through all the rabbits

      rabbit.hop(getRandomSpeed());
      // Call `.hop(getRandomSpeed())` on each rabbit
      let speed = rabbit.getSpeed();
      // Uncomment this line below when you get this far
      const calculatedValue = `calc(${speed <= 6 ? 6 : speed}vw - 10rem)`;
      // NOTE: This is what moves the rabbit to the right from the start line.
      // We use the `calc` function in CSS to calculate the speed across the screen in `vw` units
      // and subtract 10rem units (half the width of our 20rem wide rabbit images) so we get the center of the rabbit image.
      let rabID = rabbit.getRacerId();
      let strID = String(rabID);
      // This code is likely redundant/could be refactored - will test when have more time      = __ = zzZ

      rabImage = document.getElementById(strID).style.left = calculatedValue;
      // Get the rabbit image by it's class name using `.getRacerId()` and add a `left: ...;` style using the previous calculated value

      // This exact value passed to querySelector always returned null -
      // Unfortunately I have limited time, so I still dont understand why.
      // But this worked!
    }

    // Determine the winner here by filtering the rabbits and returning the ones with a speed greater than or equal to 98
    let winner = rabbitArr.filter((rabbit) => rabbit.getSpeed() >= 98);

    if (winner.length > 1) {
      // If the filtered winners array length is greater than 1

      /* This will handle a tie when there are 2 rabbits in the array*/
      /* This is needed because .filter() will reorder the array to the same order as the original,
      which disrupts accurate counting order when multiple objects are pushed to this array.
      This condition cannot be expanded to include undefined array indexes, so it needs to be refactored to be more inclusive*/

       if (winner[1]._speed > winner[0]._speed ) {
        let rabbitname = winner[1]._name;
        alert(`The winner is ${rabbitname}!`);
      } else {
        let rabbitname = winner[0]._name;
        alert(`The winner is ${rabbitname}!`);
      }

      
      // Alert the name of the rabbit that won the race

      document.getElementById("stopBtn").disabled = true;
      // Disable the stop button

      stopRace();
      // Call `stopRace()`
      winner = [];
      // Reset winner array
    }
  }, 500);
}

function stopRace() {
  for (let rabbit of rabbitArr) {
    rabbit.stop();
  }
  // Loop over all the rabbits and call `.stop()` on each rabbit

  clearInterval(timerId);
  // Clear the `timer` interval
}

/**
 * domReady is a 3rd-party library that is loaded in the HTML file and used here.
 * It exposes a utility function that we call which takes a callback as the
 * first and only argument to it, which we use to call our own code to initialize the page.
 */
domready(() => {
  document.querySelector(".js-btn-start-race").addEventListener("click", () => {
    alert("Starting the race!");
    initRace();
  });

  document.querySelector(".js-btn-stop-race").addEventListener("click", () => {
    stopRace();
    alert("Stopping the race!");
  });
});
