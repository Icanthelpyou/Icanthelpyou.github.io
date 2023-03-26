//Variablen für RGB
let R = 0;
let G = 0;
let B = 0;
//Die 3 Leben
let lives = 1;
//Speicherort der zu findenden Farbe
let Tofindcolor;
//Zwischenspeicher für die Zufälligen Farben
let RColor;
//Über diese Variable werden dann die Farben der Squares verädnert
var squares = document.querySelectorAll(".square")
//Über diese Variable wird dann der Titel verädnert
let colordisplay = document.getElementById("Titel")
let Livesdisplay = document.getElementById("Lives")
let StartButton = document.getElementById("Start")
let Endutton  = document.getElementById("End")
let ColorHeader = document.querySelector("h1")
let Mistakes = 0;
let Wins = 0;

//In dieser Function wird die zu findene Farbe berechnet
function start(){
    //Die leben werden auf 3 gesetzt
    //Der Hintergrund der Überschrift angepasst sollte er falsch sein
    ColorHeader.style.backgroundColor = "RGB(6, 117, 95)";
    //Die Farbe wird berechnet
    R = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    //Der RGB Wert wird abgespeichert
    Tofindcolor = "rgb(" + R +", " + G +", " + B +")";
    //Und ausgegeben
    colordisplay.textContent = Tofindcolor;
    //so wie die Leben und der Start knopf wird zum Neustart
    Livesdisplay.textContent = "Leben: "+ lives;
    StartButton.textContent = "Neustart";
    //Alle Squares bekommen eine Zufällige Farbe
    for(let i = 0; i < squares.length; i++)
    {
        RColor = randomColor();
        squares[i].style.backgroundColor = RColor
    }
    //Ein Square bekommt die richtige Farbe
    squares[Math.floor(Math.random()*squares.length)].style.backgroundColor = Tofindcolor
}
//Hier wird für die Squares eine zufällige Farbe generiert
function randomColor(){
    let RanCol   
    let same = true;
    //Variablen für die zufällige RGB brechnung
    let RR = 0;
    let RG = 0;
    let RB = 0;
    //Speicherort
    do
    {
    RR = Math.floor(Math.random()*20 + 10 + R);
    RG = Math.floor(Math.random()*20 + 10 + G);
    RB = Math.floor(Math.random()*20 + 10 + B);
    RanCol = "rgb(" + RR +", " + RG +", " + RB +")";
    //Sollte der Zufällig errechnete Wert dem Gesuchtem gleichen oder im Bereich von +-50 liegen wird ein neuer berechnet
   same = false;
    }while(same == true)
    return RanCol;
}
//Hier wird anhand des gedrükcten Squares überorüft ob es das richtige ist
function checkwinner(ClickedSquare){
    if( squares[ClickedSquare].style.backgroundColor == Tofindcolor)
    {
        //Wenn man gewonnen hat färbt sich der Titel in der Gesuchten Farbe und der Restart Knopf wird zum Weiter Knopf
        colordisplay.textContent = "Du bist ein Gewinner!";
        ColorHeader.style.backgroundColor = Tofindcolor;
        Wins++;
        StartButton.textContent = "Weiter";

    }
    else{
        //Wenn nicht wird das Kästchen in die selbe Farbe wie der Hintergrund getaucht
        squares[ClickedSquare].style.backgroundColor = "#302d2d";
        Mistakes++;
        lives--;
        //Ein leben wird abgezogen und wenn es unter 0 fällt wird das Spiel beendet
        Livesdisplay.textContent = "Leben: " + lives;
        if(lives < 1)
        {
            Livesdisplay.textContent = "Game OVER";
            End();
        }
    }

}
//Hier wird das Spiel beendet
function End(){
    //Der Titel wird wieder in seine Original Farbe getaucht
    ColorHeader.style.backgroundColor = "rgb(6, 117, 95)";
    //Man erfährt wieviele Siege und Fehler man hat
    colordisplay.textContent = "Ende der Runde Siege: " + Wins + " Fehler: " + Mistakes
    //Reset aller Zahlen
    Mistakes = 0;
    Wins = 0;
    StartButton.textContent = "Start";
    lives = 1;
}
