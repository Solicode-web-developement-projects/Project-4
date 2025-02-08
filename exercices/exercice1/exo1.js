let aray = document.querySelectorAll("input");

let heading = "Mes loisirs";
function myfct() {
    document.getElementsByTagName("p")[0].style.color = "red";
    document.querySelector("h1").innerHTML = heading ;
    let message= "votre choix est : ";
            for(var checkbox of aray){
                if(checkbox.checked){
                    message+=checkbox.value+ " ";
                }
            }
alert(message);
}