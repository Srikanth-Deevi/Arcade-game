// Enemies our player must avoid
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;

  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = 'images/enemy-bug.png';
};
// create a variable and assign, array
var allEnemies = [];
//we assign the position of player
var enemyPosition = [230, 145, 60];
var i = 1;
/* take a loop to identify the position of player
and create an instance for enemy class
declare enemyPosition speed
*/
while (i <= enemyPosition.length) {
  var enemy = new Enemy(0, enemyPosition[i - 1], 80 * i);
  allEnemies.push(enemy);
  i++;
}
/*create a function to access the position of player
 take a image of player likes as Character
 assing the values*/
var Player = function(x, y) {
  this.sprite = 'images/char-cat-girl.png';
  this.x = x;
  this.y = y;
}
/*create an object of Player class
set the initial player position on the game board
To call function update
*/
var player = new Player(210, 400);
Player.prototype.update = function() {

}
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//To call function e to move the Player left side
Player.prototype.handleInput = function(e) {
  if (e == 'left') {
    if (this.x >= 20) {
      this.x = this.x - 50;
    }
  }
  //Take a condition to move right side of THE Player position
  if (e == 'right') {
    if (this.x <= 390) {
      this.x = this.x + 50;
    }
  }
  //To call function e to move the Player top of its own position
  if (e == 'up') {
    if (this.y >= 10) {
      this.y = this.y - 82;
    }
  }
  //move down
  if (e == 'down') {
    if (this.y <= 390) {
      this.y = this.y + 82;
    }
  }
  //to call a function display at this movement because of to print popup messsage
  if (this.y < 40) {
    setTimeout(display, 200);
  }
}


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  var v = ((Math.random() * 5) + 1);
  this.x += v * this.speed * dt;
  if (this.x >= 520) {
    this.x = 0;
  }
  //take a condition to collision of player and enemy
  if (player.x < this.x + 80 && player.x + 50 > this.x &&
    player.y < this.y + 30 && player.y + 50 > this.y) {
    player.x = 210;
    player.y = 400;
    setTimeout(failure, 200);
  }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
//write a function to write a pop-up message using sweet alert
function display() {
  swal({
      title: "😊congratulations successfully completion of Game\n😁👍",
      type: "success",
      confirmButtonText: "play again"
    },
    //we reload the game after game completion wee use reload function
    function reload() {
      window.location.reload();

    }
  )
}
//to call a function to pop-up a message
function failure() {
  swal({
      title: "😭sorry try again👎",
      type: "error",
      confirmButtonText: "play again"
    },
    //we reload the game after game completion wee use reload function
    function reload() {
      window.location.reload();

    }
  )
}
