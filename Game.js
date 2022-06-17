// /*
//   ● Game object  should be able to hold the state of the game.
//     It should be able to display form when the game state is 0(WAIT) 
//     or the game when the game state is 1(PLAY) or leaderboard when the game state is 2(END).
//   ● GAMESTATES: 
//     0 WAIT
//     1 START
//     2 END
// */

// class Game {
//     /*   
//                   writing code to create objects even though the blueprint/CONSTRUCTOR isn't
//                   defined yet. This is called writing code using abstraction 
//                 */
//     constructor() { }
  
//     //function definition to READ/RETRIEVE/GET existing value of gameState from database
//     getState() {
//       var gameStateRef = databaseObj.ref("gameState");
//       gameStateRef.on("value", function (data) {
//         gameState = data.val();
//       });
//     }
  
//     /*
//           function definition to change existing value of gameState to a 
//           new one based on the value of paramter passed in the database
//       */
//     updateState(stateInput) {
//       databaseObj.ref("/").update({
//         gameState: stateInput,
//       });
//     }
  
//     /*
//           function defintion to start the GAME i.e. gameState will remain in WAIT(0) state 
//           displaying the rules until the player presses the "play" button
//       */
//     async start() {
//       if (gameState === 0) {
//         display.ruleObj;
//       }
  
//     }
  
//     /*
//           function defintion to activate the gameObj to START 1 mode and 
//           aligned all players to starting positions at the start line
//       */
//     play() {
//       ruleObj.hide();
  
//       /*
//               static function call to retrieve existing playerObj records: name and distance 
//               value for all registered players according to the index in the database  
//           */
//       Player.getPlayersInfo();
  
//       /*
//               function call to retrieve existing value of CarsAtEnd from database
//           */
//       Player.getCarsAtEnd();
  
//       if (allPlayers !== undefined) {
//         background("tan");
//         image(track1Img, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
  
//         //index of the array
//         var index = 0;
  
//         //x and y positions of the cars
//         var calculatedX = 200;
//         var calculatedY = 0;
  
//         //for every playerObj inside allPlayers
//         for (var plr in allPlayers) {
//           //add 1 to the index for every loop
//           index = index + 1;
  
//           //position the cars a little away from each other in x direction
//           calculatedX = calculatedX + 200;
  
//           //use data from the database to display the cars in y direction
//           calculatedY = displayHeight - 10 - allPlayers[plr].DISTANCE;
  
//           cars[index - 1].position.x = calculatedX;
//           cars[index - 1].position.y = calculatedY;
  
//           if (index === playerObj.index) {
//             cars[index - 1].shapeColor = "red";
  
//             //assigning camera with the same position as the car
//             camera.position.x = cars[index - 1].position.x;
//             camera.position.y = cars[index - 1].position.y;
  
//             //creating an indicator for the current player
//             fill("yellow");
//             stroke("yellow");
//             strokeWeight(5);
//             ellipse(calculatedX, calculatedY, 90, 90);
//           }
//         }
//       }
//       //console.log("PLAYEROBJ BEFORE ENTERING CONDITION: " + playerObj.index + ", " + playerObj.distance);
//       if (
//         keyIsDown(UP_ARROW) &&
//         playerObj.index !== null &&
//         playerObj.distance < 5600
//       ) {
//         // console.log("PLAYEROBJ AFTER ENTERING CONDITION: " + playerObj.index + ", " + playerObj.distance);
//         playerObj.distance += 30;
  
//         //function call to change existing value in the database of the distance covered for each player
//         playerObj.updatePlayersInfo();
//         //console.log("DISTANCE COVERED DURING RACE: "+playerObj.distance);
//       }
  
//       if (keyIsDown(DOWN_ARROW) && playerObj.index !== null) {
//         playerObj.distance -= 30;
  
//         //function call to change existing value in the database of the distance covered for each player
//         playerObj.updatePlayersInfo();
//         //console.log("DISTANCE COVERED DURING RACE: "+playerObj.distance);
//       }
//       // condition to check if the finish line has been crossed
//       if (playerObj.distance === 4950) {
//         playerObj.rank += 1;
  
//         // rank = 0
//         // rank = 1
//         // update playerrecord in db
//         // take that value send it to carsatfinnishline / carsatend
  
  
//         // 1
//         // 1
  
  
//         // 2 player
//         // rank = 0
//         // carsatfinishline = 1
//         // rank = carsAtfinishline + 1 = 2
//         // carsatfinishline / carsatend = 2
  
  
//         // 3 player
//         // rank = 0
//         // carsatfinishline = 2
//         // rank = carsAtfinishline + 1 = 3
//         // carsatfinishline / carsatend = 3
  
  
//         // 4 player
//         // rank = 0
//         // carsatfinishline = 3
//         // rank = carsAtfinishline + 1 = 4
//         // carsatfinishline / carsatend = 4
  
  
//         /*
//                     function definition to change existing value of CarsAtEnd to a 
//                     new one based on the value of paramter passed in the database
//                   */
//         Player.updateCarsAtEnd(playerObj.rank);
  
//         /*
//           function call to change existing value in the data base of distance and name to a 
//           new one based on the value of captured 
//         */
//         playerObj.updatePlayersInfo();
//       }
//       drawSprites();
//     }
  
//     end() {
//       //background(startbg);
//       background(rgb(198, 135, 103));
//       imageMode(CENTER);
//       image(startImage, displayWidth / 2, displayHeight / 2, width, height);
  
//       strokeWeight(5);
//       stroke(0);
//       textSize(100);
//       fill(rgb(97, 0, 181));
//       text("Game                             Over", displayWidth / 5 - 10, 250);
  
//       /*
//         static function call to retrieve existing playerObj records: name and distance 
//         value for all registered players according to the index in the database  
//       */
//       Player.getPlayersInfo();
//   //logic for sorting according to the rank of each player
//       var ranks = [];
//       var display_position = 120;
//       for (var plr in allPlayers) {
//         ranks.push(allPlayers[plr].rank);
//       }
//       ranks.sort(function (a, b) {
//         return a - b;
//       });
  
//       console.log(" ranks:             " + ranks);
  
      
//       for (var r = 0; r < 5; r = r + 1) {
//         for (var plr in allPlayers) {
//           display_position += 200;
//           if (ranks[r] === allPlayers[plr].rank) {
//             //Creating background color around text
//             fill("yellow");
//             stroke("yellow");
//             strokeWeight(0);
//             rect(120, display_position, 1200, 90);
  
//             stroke(0);
//             fill(0);
//             textSize(50);
//             text(
//               allPlayers[plr].name +
//               "               :               " +
//               allPlayers[plr].distance +
//               "               :               " +
//               allPlayers[plr].rank,
//               120,
//               display_position + 50
//             );
//           }
//         }
//       }
//     }
//   }
  
//   /*
   
//       -> databaseReference.on() creates a listener which keeps listening to the
//       gameState from the database. When the gameState is changed in
//       the database, the function passed as an argument to it is executed.
//       Note: Here the function is directly written inside the .on() listener.
   
//       -> databaseReference.update() will update the database reference.
//       Here "/" refers to the main database inside which gameState is created.
   
//       writing code to create objects even though the blueprint/ CLASS isn't
//       defined yet. This is called writing code using abstraction
   
//   */