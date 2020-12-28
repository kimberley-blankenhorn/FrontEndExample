//JSON parse
//Data from JSON is stored in variable
var mydata = JSON.parse(teamMembers);

console.table(mydata);

//Variable Definition
//randomNumber between 1 and 4 
var randomNumber = Math.floor(Math.random() * mydata.length);
//randomNumber2 between 1 and 4 
var randomNumber2 = Math.floor(Math.random() * mydata.length);

console.log(randomNumber);

//Variables are filled with random person names
var firstPlayer = mydata[randomNumber].name;
var secondPlayer = mydata[randomNumber2].name;


//if statement that checks that the same person is not chosen twice. 
//if the persons name is NOT the second persons name, the code runs
if (firstPlayer != secondPlayer) {

    //Definition of variable that counts how many rounds were played by each player
    var rollNum1 = 0;
    var rollNum2 = 0;
    //Definition of variable that will be set true when the one player rolled
    var rolled1 = false;
    var rolled2 = false;

    //Buttons are filled with players names
    document.getElementById("btn1").innerHTML = `Roll ${firstPlayer}`;
    document.getElementById("btn2").innerHTML = `Roll ${secondPlayer}`;

    //persons image will be written in HTML 
    document.getElementsByClassName("leftimg")[0].innerHTML += `<img class="teamimg" id="personimg${randomNumber}" src="./img/${mydata[randomNumber].image}">`;
    document.getElementsByClassName("rightimg")[0].innerHTML += `<img class="teamimg" id="personimg${randomNumber2}" src="./img/${mydata[randomNumber2].image}">`;

    //Write image of first player VS. image of second player
    document.getElementById("versus").innerHTML = `<img class="teamimg" id="personimg${randomNumber}" src="./img/${mydata[randomNumber].image}"> VS. <img class="teamimg" id="personimg${randomNumber2}" src="./img/${mydata[randomNumber2].image}">` + "<br>";

    //Function rollDicePlayer1
    function rollDicePlayer1() {
        //Did the opponent roll the dice? Prevents the player from rolling too many times. 
        if (rollNum1 <= rollNum2) {

            //Generate Dice Rolls
            first = Math.ceil(Math.random() * 6);
            second = Math.ceil(Math.random() * 6);
            third = Math.ceil(Math.random() * 6);

            //Calculate Sum
            sum = first + second + third;

            //Set rolled to true
            rolled1 = true;

            //Increment Number of Rolls
            rollNum1++;

            //Write Number of Rolls to HTML
            document.getElementById("round1").innerHTML = "Round " + rollNum1 + "<br>";

            //Write image of dice rolls and sum to HTML 
            document.getElementById("diceresult1").innerHTML = `<img src="./img/dice${first}.png" class="dice"><img src="./img/dice${second}.png" class="dice"><img src="./img/dice${third}.png" class="dice">`;
            document.getElementById("result1").innerHTML = `SUM: ${sum}<br>`;

            //If both opponents rolled the dice calculate the winner
            if (rolled1 == true && rolled2 == true) {
                if (sum > sum2) {

                    //Write Player1 as Winner to HTML
                    document.getElementById("winner").innerHTML = firstPlayer + " wins!";
                    document.getElementById("winner2").innerHTML = firstPlayer + " wins!";

                    //rolled1 and rolled2 reset
                    rolled1 = false;
                    rolled2 = false;
                } else if (sum < sum2) {

                    //Write Player2 as Winner to HTML
                    document.getElementById("winner").innerHTML = secondPlayer + " wins!";
                    document.getElementById("winner2").innerHTML = secondPlayer + " wins!";

                    //rolled1 and rolled2 reset
                    rolled1 = false;
                    rolled2 = false;
                } else if (sum == sum2) {

                    //Write Roll again to HTML
                    document.getElementById("winner").innerHTML = " Roll again";
                    document.getElementById("winner2").innerHTML = " Roll again";

                    //rolled1 and rolled2 reset
                    rolled1 = false;
                    rolled2 = false;
                }
            }
        }
    }

    function rollDicePlayer2() {
        if (rollNum2 <= rollNum1) {
            first2 = Math.ceil(Math.random() * 6);
            second2 = Math.ceil(Math.random() * 6);
            third2 = Math.ceil(Math.random() * 6);
            sum2 = first2 + second2 + third2;
            rolled2 = true;
            rollNum2++;
            document.getElementById("round2").innerHTML = "Round " + rollNum2 + "<br>";
            //document.getElementById("result2").innerHTML = "First roll: " + first2 + "<br> Second roll: " + second2 + "<br> Third roll: " + third2 + "<br> Sum:" + sum2 + "<br>"
            document.getElementById("diceresult2").innerHTML = `<img src="./img/dice${first2}.png" class="dice"><img src="./img/dice${second2}.png" class="dice"><img src="./img/dice${third2}.png" class="dice">`;
            document.getElementById("result2").innerHTML = `SUM: ${sum2}<br>`;
            if (rolled1 == true && rolled2 == true) {
                if (sum > sum2) {
                    document.getElementById("winner").innerHTML = firstPlayer + " wins!";
                    document.getElementById("winner2").innerHTML = firstPlayer + " wins!";
                    rolled1 = false;
                    rolled2 = false;
                } else if (sum < sum2) {
                    document.getElementById("winner").innerHTML = secondPlayer + " wins!";
                    document.getElementById("winner2").innerHTML = secondPlayer + " wins!";
                    rolled1 = false;
                    rolled2 = false;
                } else if (sum == sum2) {
                    document.getElementById("winner").innerHTML = " Roll again";
                    document.getElementById("winner2").innerHTML = " Roll again";
                    rolled1 = false;
                    rolled2 = false;
                }
            }
        }
    }
} else {
    location.reload();
}