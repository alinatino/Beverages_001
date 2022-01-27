
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: 
	Check Daten :: 
    Btn. Trigger :: 
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

/***  Ablaufsteuerung | Control */  
// 5. Modul Ablaufsteuerung | Test:
controller()
function controller() {
  output(updateImg(checkAge(getInput()))) 
}

/***  Eingabe | Check auf Datenintegrität */  
//4. Modul: Eingabe
function getInput() {
    return 15;
}



/***  Business-Logic */ 
//3. Modul: Business-Logic (Mapping) | Test:
// output(checkAge(2));
// output(checkAge(7));
// output(checkAge(13));
// output(checkAge(18));
// output(checkAge(99));
// output(checkAge(135));
function checkAge(age) {
    switch (true) {
        case (age >= 0) && (age <= 5) :
            return "milch";
        case (age >= 6) && (age <= 12):
            return "saft";
        case (age >= 13) && (age <= 17):
            return "cola";           
        case (age >= 18) && (age <= 130):
            return "wein";
        default:
            return "tee";           
    }
}

/*** View-Schicht aktualisieren */ 
//2. Modul: Bild aktualisieren | Test:
// output(updateImg("cola"));
// output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = "./bilder/" + imgName + ".jpg";
    return imgName;
}

//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}