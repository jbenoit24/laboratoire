/**
 * Created by JoyceSolano on 14-09-11.
 */

document.getElementById("image").src = "img/cascades.jpg";
document.getElementById("img0").style.background = "#00559D";

var images = ["cascades.jpg","Arbres_en_fleurs.jpg","automne.jpg","lac.jpg","paysage.jpg"];


var i = 0;

setInterval(function() {interval()}  , 2500);


console.log(i);
function interval(){

    document.getElementById("image").src = "img/" + images[i];
    if(i < images.length-1){
        i = i+1;
        document.getElementById("image").src = "img/" + images[i];
        console.log(i);
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        var precedent = i-1;

        document.getElementById("img" + precedent.toString()).style.background = "#00B3E6";


    }else{
        i=0;
        document.getElementById("image").src = "img/" + images[i];
        console.log(i);
        console.log("img" + i.toString());
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        document.getElementById("img4").style.background = "#00B3E6";
    }
}



function defilementDroite(){

    if(i < images.length-1){

        i = i+1;
        document.getElementById("image").src = "img/" + images[i];
        console.log(i);
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        var precedent = i-1;
        document.getElementById("img" + precedent.toString()).style.background = "#00B3E6";


    }else{
        i=0;
        document.getElementById("image").src = "img/" + images[i];
        console.log(i);
        console.log("img" + i.toString());
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        document.getElementById("img4").style.background = "#00B3E6";

    }


}

function defilementGauche(){

    document.getElementById("image").src = "img/" + images[i];


    if(i > 0){
        i = i-1;
        document.getElementById("image").src = "img/" + images[i];
        console.log(i);
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        var precedent = i+1;
        document.getElementById("img" + precedent.toString()).style.background = "#00B3E6";
    }else{
        i=4;
        console.log("img" + i.toString());
        document.getElementById("image").src = "img/" + images[i];
        document.getElementById("img" + i.toString()).style.background = "#00559D";
        document.getElementById("img0").style.background = "#00B3E6";
    }


}