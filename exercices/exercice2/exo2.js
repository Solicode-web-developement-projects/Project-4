function myfct(){
let Nom = document.getElementById("name").value;
let lastName = document.getElementById("lastName").value;
let age = parseInt(document.getElementById("age").value);
if(age >= 18){
var tab = document.getElementById("myTable");
var ro = tab.insertRow(-1);
var cell1 = ro.insertCell(0);
var cell2 = ro.insertCell(1);
var cell3 = ro.insertCell(2);
  cell1.innerHTML = Nom;
  cell2.innerHTML = lastName;
  cell3.innerHTML = age;
}
else if(age < 18 || isNaN(age)){
   document.getElementById("demo").innerHTML = "age most be plus 18";
}
}
