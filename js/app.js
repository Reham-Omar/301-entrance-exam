'use strict';
// var array=['1','2','3','4'];
// var num=3;
// var returnNumber=[];
var array = prompt("Enter your array").split(",");
var number=prompt("enter number");
function greater(){
    for (var i=0; i<array.length ;i++){
        if( array[i]>number){
            console.log( array[i]);
            document.write(array[i]);
        }
       
    }
    

}
greater();