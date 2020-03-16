'use strict';
var enterNumStarsvar = prompt("Enter number of stars line ");

function star(){
    for (var i=0; i<1;i++){ 
        var stars="";
        for (var j=0;j<enterNumStarsvar;j++) {
            stars += "*";
            console.log(stars);
            document.write(stars);
            document.write('<br>');
        }     
       
       
    }
    
}

star();