//Variablen für RGB
let R = 0;
let G = 0;
let B = 0;
 // Die Variable der zu findenden Farbe
let Tofindcolor;
//Zwischenspeicher für die Zufälligen Farben
let RColor;
//Über diese Variable werden dann die Farben der Squares verädnert
var squares = document.querySelectorAll(".square")
//Über diese Variable wird dann der Titel verädnert
let colordisplay = document.getElementById("Titel")
let StartButton = document.getElementById("Start")
let Endutton  = document.getElementById("End")
let ColorHeader = document.querySelector("h1")
let Mistakes = 0;
let Wins = 0;

//In dieser Function wird die zu findene Farbe berechnet
function start(){
    //Der Hintergrund der Überschrift angepasst sollte er falsch sein
    ColorHeader.style.backgroundColor = "rgb(6, 117, 95)";
    //Die Farbe wird berechnet
    R = Math.floor(Math.random()*255);
    G = Math.floor(Math.random()*255);
    B = Math.floor(Math.random()*255);
    //Der RGB Wert wird abgespeichert
    Tofindcolor = "rgb(" + R +", " + G +", " + B +")";
    //Und ausgegeben
    colordisplay.textContent = Tofindcolor;
    //so wie die Leben und der Start knopf wird zum Neustart
    StartButton.textContent = "Restart";
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
    RR = Math.floor(Math.random()*255);
    RG = Math.floor(Math.random()*255);
    RB = Math.floor(Math.random()*255);
    RanCol = "rgb(" + RR +", " + RG +", " + RB +")";
    //Sollte der Zufällig errechnete Wert dem Gesuchtem gleichen oder im Bereich von +-50 liegen wird ein neuer berechnet
    if(RR < R-50 || RR > R+50 && RB < B-50 || RB > B+50 &&RG < G-50 || RG > G+50 ){
        same = false;
    }
    else
    {
        same = true
    }
    }while(same == true)
    return RanCol;
}
//Hier wird anhand des gedrükcten Squares überorüft ob es das richtige ist
function checkwinner(ClickedSquare){
    if( squares[ClickedSquare].style.backgroundColor == Tofindcolor)
    {
        //Wenn man gewonnen hat färbt sich der Titel in der Gesuchten Farbe und der Restart Knopf wird zum Weiter Knopf
        colordisplay.textContent = "Du bist ein gewinner";
        ColorHeader.style.backgroundColor = Tofindcolor;
        Wins++;
        StartButton.textContent = "Weiter";
    }
    else{
        //Wenn nicht wird das Kästchen in die selbe Farbe wie der Hintergrund getaucht
        squares[ClickedSquare].style.backgroundColor = "#302d2d";
        Mistakes++;
    }

}
//Hier wird das Spiel beendet
function End(){
    //Der Titel wird wieder in seine Original Farbe getaucht
    ColorHeader.style.backgroundColor = "rgb(6, 117, 95)";
    //Man erfährt wieviele Siege und Fehler man hat
    colordisplay.textContent = "Ende der Runde! Seige: " + Wins + " Fehler: " + Mistakes
    //Reset aller Zahlen
    Mistakes = 0;
    Wins = 0;
    StartButton.textContent = "Start";
}