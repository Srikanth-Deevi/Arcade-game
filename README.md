# Classic Arcade Game Clone Project

## Table of Contents

-   [Download](#download)
-   [Instructions](#instructions)
-   [How to play](#how-to-play)
-   [Benefits of arcade game](#Benefits-of-arcade-game)
-   [Basic Functionality](#Basic-functionality)
-   [Development](#development)
-   [Contributing](#contributing)

## Download

\->Initially we download it and extract the file.

1.Arcade game project repository on GitHub :><https://github.com/udacity/frontend-nanodegree-arcade-game>

2.the extraction file:<https://github.com/udacity/frontend-nanodegree-arcade-game.git>

## Instructions

\->Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

\->Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## How to play?

\->Open the Live Preview If you want to run the game locally, and open the index.html file.

\-> Run the html file in the browser and play it.

\->Try to reach the Water without touching a bug.

\->It is a Keyboard Game only. We can control it with the arrows up, down, right, left.

\->Good Luck! and have fun!

## Benefits of arcade game

\->Improves cognitive abilities. Even the most basic games boost multi-tasking and decision-making skills.

\->Gaming reduces stress and depression.

\->Curbs cravings and helps reduce weight.

\->Improves reflexes and muscle memory.

## Basic Functionality

\->In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies.

\->The player can move left, right, up and down.

\->The enemies move speeds on the paved block portion. Once a the player collides with an enemy, the game is reset and the player moves back to the start square.

\->Once the player reaches the water the game is won.

\-> some functions are like all Enemies

## Developing the Game

Inside the app.js file, I will need to implement the Player and the Enemy classes, using Object-Oriented JavaScript. Be sure to review all code comments written in app.js. Part of the code for the Enemy is provided to me, and I will need to complete the following:

-   We develop the Enemy function, which initiates the Enemy that enemy was not touch the bug.

-   I am specifying the size of the Player and where bugs are moved in the game board using X and y axis.

-   If the Player touch the bug the Player comes initial position.

-   Loading the image by setting this. sprite to the appropriate image in the image folder already provided.

-   I am using sweet alert function display the popup message after the win or loss the game.

## Implementation

● Setting the Enemy initial location.

● Setting the Enemy speed.

● The update method for the Enemy:

● Updates the Enemy location.

● Handles collision with the Player.

● I am adding my own enemy method and also implemented the Player class, I am using enemy class as an example on how to get started.

● Creating a new Player object.

● Creating several new Enemies objects and placing them in an array called
all Enemies.

## WHAT'S INCLUDED:-

1.  CSS:

2.  images:

    -   Consists of images used in game and the Used resources.

3.  js:

-   app.js:

    -   contains java script code that handles game functionality using the new ECMA 6 Js.

-   engine.js:

    -   contains game loop functionality.

    -   draws the initial game board on the screen.

    -   calls update, render methods on player and enemy objects.

-   resource.js:

    -   it is a simple image loading utility.

-   index.html:


    -   Browser creates DOM tree from this html file.

    -   Displays web contents of game.

    -   Canvases the game.

-   readme.txt

    -   States Overall description of project

## process/follow the Game

\->The Player function, which initiates the Player by:

● Loading the image by setting this. sprite to the appropriate image in the
image folder.

● Setting the Player initial location.

● The update method for the Player (can be similar to the one for the Enemy).

● The render method for the Player (use the code from the render method for the
Enemy).

● The handle Input method, which should receive user input, allowed Keys (the key
which was pressed) and move the player according to that input.

● Left key should move the player to the left, right key to the right, up should
move the player up and down should move the player down.

● Recall that the player cannot move off screen (so you will need to check for
that and handle appropriately).

● If the player reaches the water the game should be reset by moving the
player back to the initial location.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
