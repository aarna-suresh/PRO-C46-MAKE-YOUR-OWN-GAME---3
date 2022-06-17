//Declare variables for gameObj objects and behaviour indicators(FLAGS)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box;
var groundObj;
var endMessage, restartButton;
var endLine;
var barrier;
var gameObj, gameState;
var databaseObj;
var ruleObj;


//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {

}

//define the initial environment of the software(before it is used)
//by defining the declared variables with default values
function setup() {
	createCanvas(1200, 500);

	// //initialize the database-
    // databaseObj = firebase.database();

    // gameState = 0; //0=WAIT, 1=PLAY, 2=END

	// gameObj = new Game();
    // //function call to READ/RETRIEVE/GET existing value of gameState from database
    // gameObj.getState();

    // //function call to start the GAME i.e. gameState will activate  0 WAIT state
    // gameObj.start();

	//creating userengine and userworld for matter.js
	userEngine = Engine.create();
	userWorld = userEngine.world;

	// //creating the rules obj
	// ruleObj = new Text(10, 50, "The rules are simple, to move forward press left arrow, to go backwards, the up arrow, do NOT press the right or down arrow because it will get you to your goal");

	//Create the Bodies of box and endLine and obj of ground Here.
	var box_options = {
		isStatic: false,
		restitution: 0,
		friction: 0,
		density: 1.2,
		velocity: { x: -5, y: 0 }
	}
	box = Bodies.rectangle(20, 200, 15, 15, box_options);
	World.add(userWorld, box);
	console.log(box);
	//creating the ground
	groundObj = new Ground(width / 2, 450, width, 20);
	//create barrier
	barrier = new Ground(-30, 390, 60, 100);
	var endLine_options = {
		isStatic: true,
		restition: 0,
		friction: 0,
		density: 1.2,
	}
	//creating the endLine
	endLine = Bodies.rectangle(1100, 425, 20, 30, endLine_options);
	World.add(userWorld, endLine);

	var barrier_options = {
		isStatic: true,
		restition: 0,
		friction: 0,
		density: 1.2,
	}


}


function draw() {
	background(0);

	//making the body of the ball visible
	Engine.update(userEngine);
	fill("white");
	rectMode(CENTER);
	rect(box.position.x, box.position.y, 30, 30);

	//making the body of the endLine visible
	fill("red");
	rectMode(CENTER);
	rect(endLine.position.x, endLine.position.y, 20, 30)

	//displaying the ground
	groundObj.display();

	//displaying the barrier
	barrier.display();

	
//     //conditions for GAMESTATE to change from 0 to 1 to 2
//     if (playerCount === 4) {
//         /*
//          function call to change existing value of gameState to a 
//          new one based on the value of parameter passed in the database
//         */
//         gameObj.updateState(1);
//     }

//     if (gameState === 1) {
//         /*
//           function call to activate the gameObj to START 1 mode and 
//           aligned all players to starting positions at the start line
//         */
//         gameObj.play();
//     }

//     if (carsAtFinishLine === 4) {
//         /*
//           function call to change existing value of gameState to a 
//           new one based on the value of parameter passed in the database
//         */
//         gameObj.updateState(2);
//     }

//     if (gameState === 2) {
//         /*
//          function call to activate the gameObj to END 2 mode and display leaderboard screen
//         */
//         gameObj.end();
//     }
}


function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.setVelocity(box, { x: 5, y: 0 });

	}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.setVelocity(box, { x: -5, y: 0 });

	}

	if (keyCode === UP_ARROW) {
		Matter.Body.setVelocity(box, { x: -20, y: 0 });
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setVelocity(box, { x: 20, y: 4 });
	}




}

