var nbBillet = 2;

function maFonction(){
var tarifAdulte = 10;
var tarifEnfant = 8;
var ageAdulte = 15;
var ageEnfant = 6;
var ticketPrice = '';

if( nbBillet > 0 ) {

    var response = document.getElementById("age").value

    if(response >= ageAdulte) {
        //ticketPrice = ` Le prix de votre billet est de ${tarifAdulte} € `;
        ticketPrice = " Le prix de votre billet sera de "+tarifAdulte+" € ";

    } else if(response < 15 && response >= 6) {
        ticketPrice = ` Le prix de votre billet est de ${tarifEnfant} € `;

    } else {
        ticketPrice = 'Le prix du billet est gratuit';
    }

    document.getElementById("msg").innerHTML = ticketPrice;
    nbBillet--;
    document.getElementById("msg2").innerHTML = nbBillet;
    
}else{
    document.getElementById("msg").innerHTML = "<br>L'évènement est complet";

}
}

