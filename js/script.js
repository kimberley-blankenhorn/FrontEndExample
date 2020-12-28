//JSON parse
//Data in JSON file is stored in variable
var mydata = JSON.parse(teamMembers);
console.log(mydata);

//Function for determining which media query is active
function mediaQueryWatch(x, y) {

    //if Statements for media queries
    //if phone media query is active
    if (mql1.matches) {

        console.log("mediaQuery phone works");

        //teamcontainer gets filled with nothing - needs to be done when moving from another media query. Otherwise pictures and text would be always added 
        document.getElementById("teamcontainer").innerHTML = "";

        //for loop to fill first row
        for (var i = 0; i < 2; i++) {

            // necessary to address profile pages because they start at 1 e.g. profile1.html
            var loc = i + 1;

            //teammcontainer gets filled with a link containing a div with an image and name
            document.getElementById("teamcontainer").innerHTML += `<a href="profile${loc}.html"><div class="teambox" id="teammember${i}"><div class="imgname"><img class="teamimg" id="personimg${i}" src="./img/${mydata[i].image}"><h4>${mydata[i].name}</h4></div><div class="moreInfo" id="moreInfo${i}" style="display: none;"><h5>Email:</h5> <p>${mydata[i].email}</p><h5>Age: </h5><p>${mydata[i].age}</p><h5>Hobby: </h5><p>${mydata[i].hobby}</p></a></div>`;
        }

        //insert break so that the rows never slip up to the first row
        document.getElementById("teamcontainer").innerHTML += `<div class="break"></div>`

        //for loop to fill second row
        for (var i = 2; i < 4; i++) {

            // necessary to address profile pages because they start at 1 e.g. profile1.html
            var loc = i + 1;

            //teammcontainer gets filled with a link containing a div with an image and name
            document.getElementById("teamcontainer").innerHTML += `<a href="profile${loc}.html"><div class="teambox" id="teammember${i}"><div class="imgname"><img class="teamimg" id="personimg${i}" src="./img/${mydata[i].image}"><h4>${mydata[i].name}</h4></div><div class="moreInfo" id="moreInfo${i}" style="display: none;"><h5>Email: </h5><p>${mydata[i].email}</p><h5>Age: </h5><p>${mydata[i].age}</p><h5>Hobby: </h5><p>${mydata[i].hobby}</p></a></div>`;
        }

    //if monitor media query is active
    } else if (mql2.matches) {

        console.log("mediaQuery monitor works");

        //teamcontainer gets filled with nothing - needs to be done when moving from another media query. Otherwise pictures and text would be always added 
        document.getElementById("teamcontainer").innerHTML = "";

        //for loop to fill first row
        for (var i = 0; i < 2; i++) {

            //teammcontainer gets filled with a div containing an image, name. Also a div, which is initially display: none and gets revealed after click. Contains e-mail, hobbies etc.
            document.getElementById("teamcontainer").innerHTML += `<div class="teambox" id="teammember${i}"><div class="imgname"><img class="teamimg" id="personimg${i}" src="./img/${mydata[i].image}"><h4>${mydata[i].name}</h4></div><div class="moreInfo" id="moreInfo${i}" style="display: none;"><h5>Email:</h5> <p>${mydata[i].email}</p><h5>Age: </h5><p>${mydata[i].age}</p><h5>Hobby: </h5><p>${mydata[i].hobby}</p></div>`;
        }

        //insert break so that the rows never slip up to the first row
        document.getElementById("teamcontainer").innerHTML += `<div class="break"></div>`

        //for loop to fill second row
        for (var i = 2; i < 4; i++) {

            //teammcontainer gets filled with a div containing an image, name. Also a div, which is initially display: none and gets revealed after click. Contains e-mail, hobbies etc.
            document.getElementById("teamcontainer").innerHTML += `<div class="teambox" id="teammember${i}"><div class="imgname"><img class="teamimg" id="personimg${i}" src="./img/${mydata[i].image}"><h4>${mydata[i].name}</h4></div><div class="moreInfo" id="moreInfo${i}" style="display: none;"><h5>Email: </h5><p>${mydata[i].email}</p><h5>Age: </h5><p>${mydata[i].age}</p><h5>Hobby: </h5><p>${mydata[i].hobby}</p></div>`;
        }

        //Functions for expanding the teambox
        function moreInfos0() {

            //first teambox is revealed
            document.getElementById("moreInfo0").style.display = "block";

            //first teambox becomes wider
            document.getElementById("teammember0").style.width = "19vw";

            //other teamboxes get smaller
            document.getElementById("teammember1").style.width = "14vw";
            document.getElementById("teammember2").style.width = "14vw";
            document.getElementById("teammember3").style.width = "14vw";
            
            //content in other teamboxes will be hidden
            document.getElementById("moreInfo1").style.display = "none";
            document.getElementById("moreInfo2").style.display = "none";
            document.getElementById("moreInfo3").style.display = "none";
        }

        //same thing for second box
        function moreInfos1() {
            document.getElementById("moreInfo1").style.display = "block";
            document.getElementById("teammember1").style.width = "19vw";
            document.getElementById("teammember0").style.width = "14vw";
            document.getElementById("teammember2").style.width = "14vw";
            document.getElementById("teammember3").style.width = "14vw";
            document.getElementById("moreInfo0").style.display = "none";
            document.getElementById("moreInfo2").style.display = "none";
            document.getElementById("moreInfo3").style.display = "none";
        }

        //same thing for third box
        function moreInfos2() {
            document.getElementById("moreInfo2").style.display = "block";
            document.getElementById("teammember2").style.width = "19vw";
            document.getElementById("teammember0").style.width = "14vw";
            document.getElementById("teammember1").style.width = "14vw";
            document.getElementById("teammember3").style.width = "14vw";
            document.getElementById("moreInfo0").style.display = "none";
            document.getElementById("moreInfo1").style.display = "none";
            document.getElementById("moreInfo3").style.display = "none";
        }

        //same thing for fourth box
        function moreInfos3() {
            document.getElementById("moreInfo3").style.display = "block";
            document.getElementById("teammember3").style.width = "19vw";
            document.getElementById("teammember0").style.width = "14vw";
            document.getElementById("teammember1").style.width = "14vw";
            document.getElementById("teammember2").style.width = "14vw";
            document.getElementById("moreInfo0").style.display = "none";
            document.getElementById("moreInfo1").style.display = "none";
            document.getElementById("moreInfo2").style.display = "none";
        }

        //function that when clicked on a second time revert back to original size and sets content to display: none
        function lessInfos0() {
            document.getElementById("moreInfo0").style.display = "none";
            document.getElementById("teammember0").style.width = "14vw";
            console.log("lessInfo0 works");
        }

        //same thing for second box
        function lessInfos1() {
            document.getElementById("moreInfo1").style.display = "none";
            document.getElementById("teammember1").style.width = "14vw";
            console.log("lessInfo1 works");
        }

        //same thing for third box
        function lessInfos2() {
            document.getElementById("moreInfo2").style.display = "none";
            document.getElementById("teammember2").style.width = "14vw";
            console.log("moreInfo2 works");
        }

        //same thing for fourth box
        function lessInfos3() {
            document.getElementById("moreInfo3").style.display = "none";
            document.getElementById("teammember3").style.width = "14vw";
            console.log("moreInfo3 works");
        }


        //eventlisteners that call functions moreInfosX() on click if the display style is none, otherwise lessInfos 
        document.getElementById("teammember0").addEventListener("click", function() {
            if (document.getElementById("moreInfo0").style.display == "none") {
                moreInfos0();
            } else {
                lessInfos0();
            }
        }, false);

        document.getElementById("teammember1").addEventListener("click", function() {
            if (document.getElementById("moreInfo1").style.display == "none") {
                moreInfos1();
            } else {
                lessInfos1();
            }
        }, false);

        document.getElementById("teammember2").addEventListener("click", function() {
            if (document.getElementById("moreInfo2").style.display == "none") {
                moreInfos2();
            } else {
                lessInfos2();
            }
        }, false);


        document.getElementById("teammember3").addEventListener("click", function() {
            if (document.getElementById("moreInfo3").style.display == "none") {
                moreInfos3();
            } else {
                lessInfos3();
            }
        }, false);
    }
}

//window.matchMedia() method returns a MediaQueryList object representing the results of the specified CSS media query string
var mql1 = window.matchMedia("(max-width: 480px)");
var mql2 = window.matchMedia("(min-width: 481px)");

mediaQueryWatch(mql1, mql2); // Call listener function at run time
mql1.addListener(mediaQueryWatch); //listener function on state changes
mql2.addListener(mediaQueryWatch); //listener function on state changes