function getColor(name){
    let feedback = document.getElementsByName(name);
    let text = "Wie viele Sterne von " +feedback.length + " haben Sie uns gegeben: " + "\n";
    if (feedback[0].checked){
       text += feedback[0].value;
   } else if (feedback[1].checked){
       text += feedback[1].value;
   } else if (feedback[2].checked){
       text += feedback[2].value;
   } else if (feedback[3].checked){
       text += feedback[3].value;
   } else if (feedback[4].checked){
       text += feedback[4].value;
   } else {
       text += "Keine Bewertung abgegeben";
   }
   alert(text);
}
