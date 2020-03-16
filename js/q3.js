'use strict';

var inputForm = document.getElementById('myForm');
var content = [];
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

    var incert = new formlist(doneToday, date);
    console.log(incert);
    content.push(incert);
    // console.log(content);
    setItem();
    listofResult();
    inputForm.reset();



});

function  listofResult(){
    var ulEl=document.getElementById('toDo');
    for (var i=0 ;i<content.length;i++){
        var liEl=document.createElement('li');
        liEl.textContent=`${content[i].value} at ${content[i].date} `;
        ulEl.appendChild(liEl);
    }

}

 function setItem(){
     var datas=JSON.stringify(content);
     localStorage.setItem('user information' ,datas);

}

function getItem(){
    var getresult=localStorage.getItem('result of the form');
    if (getresult){
        content=JSON.parse(getresult);
    }

}
getItem();