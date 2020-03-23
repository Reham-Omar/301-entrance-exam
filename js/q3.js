'use strict';
var inputForm = document.getElementById('myForm');
var remove = document.getElementById('remove');
var whattodo=[];
var dateOf=[];
function Formlist(doneToday, date) {
  this.doneToday = doneToday;
  this.date = date;
  whattodo.push(doneToday);
  dateOf.push(date);
}
inputForm.addEventListener('submit', function (event) {
  event.preventDefault();
  // console.log(event);
  var doneToday = event.target.donetoday.value;
  var date = event.target.mydate.value;
  // console.log(doneToday);
  new Formlist(doneToday, date);
  setItem1();
  setItem2();
  listofResult();
  inputForm.reset();
});

function listofResult(){
  var remove = document.getElementById('remove');
  var ulEl=document.getElementById('toDo');
  ulEl.textContent = '';
  remove.textContent='';
  for (var i=0 ;i<whattodo.length;i++){
    var liEl=document.createElement('li');
    liEl.textContent=`${i+1} - ${whattodo[i]}`;
    ulEl.appendChild(liEl);
    var pEl=document.createElement('p');
    pEl.textContent=` ${dateOf[i]}`;
    ulEl.appendChild( pEl);
    var liRemove = document.createElement('li');
    liRemove.textContent = 'X';
    remove.appendChild(liRemove);
    liRemove.setAttribute('id',i);
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
remove.addEventListener('click',function (event){
  event.preventDefault();
  var removeItem = event.target.id;
  whattodo.splice(removeItem,1);
  dateOf.splice(removeItem,1);

  setItem1();
  setItem2();
  listofResult();
});
getItem1();
getItem2();

// do the date
var n =  new Date();
var y = n.getFullYear();
// var m = n.getMonth() + 1;
var month = new Array();
month[0] = 'Jan';
month[1] = 'Feb';
month[2] = 'Mar';
month[3] = 'April';
month[4] = 'May';
month[5] = 'June';
month[6] = 'July';
month[7] = 'Aug';
month[8] = 'Sep';
month[9] = 'Oct';
month[10] = 'Nov';
month[11] = 'Dec';

var m = month[n.getMonth()];
var d = n.getDate();
document.getElementById('date').innerHTML = m + ' ' + d + ' ' + y;
