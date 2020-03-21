'use strict';

var inputForm = document.getElementById('myForm');
var whattodo=[];
var dateOf=[];
function formlist(doneToday, date) {
    this.doneToday = doneToday;
    this.date = date;

}
inputForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(event);
    var doneToday = event.target.donetoday.value;
    var date = event.target.mydate.value;
    // console.log(doneToday);

    whattodo.push(doneToday);
    dateOf.push(date);
    setItem1();
    setItem2();
    listofResult();
    inputForm.reset();



});

function  listofResult(){
    
    var ulEl=document.getElementById('toDo');
    ulEl.textContent = "";
    for (var i=0 ;i<whattodo.length;i++){
        var liEl=document.createElement('li');
        liEl.textContent=`${i+1} - ${whattodo[i]}`;
        ulEl.appendChild(liEl);
        var pEl=document.createElement('p');
        pEl.textContent=` ${dateOf[i]}`;
        ulEl.appendChild( pEl);
        // var imgEl=document.createElement('img');
        // img.src =dowenload.png;
        // liEl.appendChild(imgEl);
    }

}


function setItem1(){
    var whattodotoday=JSON.stringify(whattodo);
    localStorage.setItem('what to do' , whattodotoday);

}
function setItem2(){
    var dateOftoday=JSON.stringify(dateOf);
    localStorage.setItem('date of' ,dateOftoday);

}


function getItem1(){
    var getresult1=localStorage.getItem('result 1 of the form');
    if (getresult1){
        whattodo=JSON.parse(getresult1);
    }

}
function getItem2(){
    var getresult2=localStorage.getItem('result 2 of the form');
    if (getresult2){
        dateOf=JSON.parse(getresult2);
    }

}
getItem1();
getItem2();