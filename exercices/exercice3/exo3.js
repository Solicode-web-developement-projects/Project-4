function myfct(){
    let Nom = document.getElementById("name").value.toUpperCase().substr(0,3);
    let lastName = document.getElementById("lastName").value.toLowerCase().slice(-3);
    let age = parseInt(document.getElementById("age").value);
    let passLast = lastName.split("");
if (Nom === "" || lastName === "" || isNaN(age)){
    document.getElementById("demo").innerHTML = "you forgot somthing";
}
else{
    document.getElementById("demo").innerHTML ="le mot de passe est : "+Nom+(2023-age)+passLast[2]+passLast[1]+passLast[0];
}
}