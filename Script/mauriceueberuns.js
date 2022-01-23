let admin1 = {
    "vorname": "Maurice",
    "nachname": "Wolf",
    "alter": 17,
    "ausbildung": "Mediamatiker",
    "firma": "Swisscom",
    "hobby": "Bodybuilding"
}

let htmlObj = document.getElementById("infosmaurice")
htmlObj.innerHTML = 
  'Vorname: ${admin1.vorname}<br>'+
  'Nachname: ${admin1.nachname}<br>'+
  'Alter: ${admin1.alter}<br>'+
  'Ausbildung: ${admin1.ausbildung}<br>'+
  'Firma: ${admin1.firma}<br>'+
  'Hobby: ${admin1.hobby}<br>';