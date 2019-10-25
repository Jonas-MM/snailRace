
var startknap = document.getElementById("startbutton");
hentNoget();

// alert("ds");
startknap.addEventListener("click", start);
var snegl1 = {
    id: "a",
    navn: "Snegl 1",
    foto: "./assets/images/snegl1.png",
    x: -160,
    y: -40,
    title: "John John",
    AntalVinder: 0
};
var snegl2 = {
    id: "b",
    navn: "Snegl 2",

    foto: "./assets/images/snegl2.png",
    x: -160,
    y: 60,
    title: "Jon Snow´s lillebror",
    AntalVinder: 0
};

var snegl3 = {
    id: "c",
    navn: "Snegl 3",
    foto: "./assets/images/snegl3.png",
    x: -160,
    y: 160,
    title: "Jon Snow",
    AntalVinder: 0
    
};

var snegl4 = {
    id: "d",
    navn: "Snegl 4",
    foto: "./assets/images/snegl4.png",
    x: -160,
    y: 260,
    title: "Jon Snow´s storebror",
    AntalVinder: 0
};

var sek = 0;
var minSpring = 2;
var maxSpring = 25;
var tidsinterval = 100;
var finishLine = 770;

window.onload = function () {
    var racetrack = document.getElementById("raceway");


    //snegl 1

    var s1 = document.createElement("div");
    s1.id = snegl1.id;
    s1.className = "snegle-container";
    s1.style.top = snegl1.y + "px";
    s1.style.left = snegl1.x + "px";
    s1.style.zIndex = "1000";
    racetrack.appendChild(s1);
    s1.style.backgroundImage = 'url('+snegl1.foto+')';
    s1.title = "John John";
    s1.AntalVinder = 0;
    



    //snegl 2

    var s2 = document.createElement("div");
    s2.id = snegl2.id;
    s2.className = "snegle-container";
    s2.style.backgroundImage = "url('" + snegl2.foto + "')";
    s2.style.top = snegl2.y + "px";
    s2.style.left = snegl2.x + "px";
    racetrack.appendChild(s2);
    s2.title = "Jon Snow";
    s2.AntalVinder = 0;


    //snegl 3

    var s3 = document.createElement("div");
    s3.id = snegl3.id;
    s3.className = "snegle-container";
    s3.style.backgroundImage = "url('" + snegl3.foto + "')";
    s3.style.top = snegl3.y + "px";
    s3.style.left = snegl3.x + "px";
    racetrack.appendChild(s3);
    s3.title = "Jon Snow´s lillebror";
    s3.AntalVinder = 0;


    //snegl 4

    var s4 = document.createElement("div");
    s4.id = snegl4.id;
    s4.className = "snegle-container";
    s4.style.backgroundImage = "url('" + snegl4.foto + "')";
    s4.style.top = snegl4.y + "px";
    s4.style.left = snegl4.x + "px";
    racetrack.appendChild(s4);
    s4.title = "Jon Snow´s storebror";
    s4.AntalVinder = 0;
}


//start race

function start() {
    startknap.style.display = "none";
    // alert("dsa");
    afsted();
    
};

function afsted() {
    // console.log(snegl1.x);
    // console.log(snegl2.x);
    // console.log(snegl3.x);
    // console.log(snegl4.x);
    snegl1.x += spring();
    snegl2.x += spring();
    snegl3.x += spring();
    snegl4.x += spring();

    document.getElementById(snegl1.id).style.left = snegl1.x + "px";
    document.getElementById(snegl2.id).style.left = snegl2.x + "px";
    document.getElementById(snegl3.id).style.left = snegl3.x + "px";
    document.getElementById(snegl4.id).style.left = snegl4.x + "px";

    if (snegl1.x >= finishLine || snegl2.x >= finishLine || snegl3.x >= finishLine || snegl4.x >= finishLine) {

        if ((snegl1.x > snegl2.x) && (snegl1.x > snegl3.x) && (snegl1.x > snegl4.x))  {
            setTimeout("winner('" + snegl1.title + "');", 1000);
            return snegl1.AntalVinder += 1; 
        } 
        
        else if ((snegl2.x > snegl1.x) && (snegl2.x > snegl3.x) && (snegl2.x > snegl4.x)) {
            setTimeout("winner('" + snegl2.title + "');", 1000);
            return snegl2.AntalVinder += 1;
        } 
        else if ((snegl3.x > snegl1.x) && (snegl3.x > snegl2.x) && (snegl3.x > snegl4.x)) {
            setTimeout("winner('" + snegl3.title +  "');", 1000);
            return snegl3.AntalVinder += 1;   
        } 
        else if ((snegl4.x > snegl3.x) && (snegl4.x > snegl2.x) && (snegl4.x > snegl1.x)) {
            setTimeout("winner('" + snegl4.title + "');", 1000);
            return snegl4.AntalVinder += 1;   
        } 
        else {
            setTimeout("winner('');", 1000);
        }
     
    } else {
        setTimeout("afsted();", tidsinterval);
        sek = sek + 1;
    }
};


function winner(vinderen) {
    var tid = (sek * tidsinterval) / 1000;

    if (vinderen == "") {
        alert("slut")
    } else {
        console.log( vinderen + " vandt spillet " + "det tog " + tid + " sekunder.")
    }
    localStorage.setItem("tid", tid);
    localStorage.setItem("LocalVinder", vinderen);
    localStorage.setItem("Antal", snegl1.AntalVinder);
    hentNoget();
};

function spring() {
    var randomStep = Math.round(Math.random() * maxSpring) + maxSpring;
    return randomStep;
}


//Session storage*******************************************************************

function hentNoget() {
    // Local storage
        document.querySelector("#firstTid").innerText = localStorage.getItem("tid");
        document.querySelector("#first").innerText = localStorage.getItem("LocalVinder");
        document.querySelector("#Antal").innerText = localStorage.getItem("Antal");

    
  }

