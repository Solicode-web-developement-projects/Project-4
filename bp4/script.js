var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
let email = document.getElementsByName("Email");
let nom =  document.getElementsByName("Nom");
let prénom =  document.getElementsByName("Prénom");
let genre = document.getElementsByName("genre");
let filiere = document.getElementsByName("filiere")[0];
let groups = document.getElementById("groups");
const aray = ["GM1","GM2","GM3","GM4"];
const WebArray =["GW1","GW2","GW3","GW4"];
let checkboxesArr = document.querySelectorAll("input[type='checkbox']");
let fil = document.getElementById("filiere");
let i=0;
let h = 0;
let f = 0;
let w = 0;
let m = 0;
let AI = 0;
let sport = 0;
let music = 0;
let hackathon = 0;
let limitClub = false

function changeFunction(){
    if(filiere.value=="Mobile"){
        groups.innerHTML="";
        for(let i = 0; i<aray.length; i++){
            let option = document.createElement("option");
            let text = document.createTextNode(aray[i]);
            option.appendChild(text);
            groups.value=(aray[i]);
            groups.appendChild(option);
           
    }
    }
    else if(filiere.value=="Web"){
        groups.innerHTML="";
        for(let i = 0; i<WebArray.length; i++){
            let option = document.createElement("option");
            let text = document.createTextNode(WebArray[i]);
            option.appendChild(text);
            groups.value=(WebArray[i]);
            groups.appendChild(option);
    }
}

}

function nextFunct() {
    if(email[0].value.slice(-9) === "@ofppt.ma" && !(nom[0].value === "") && !(prénom[0].value === "") && ((genre[0].checked) || (genre[1].checked))){
        form1.style.display="none";
        form2.style.display="block";
    }
    else{
        if(email[0].value.slice(-9) !== "@ofppt.ma"){
        email[0].value="";
        email[0].placeholder="verifier la forme example@ofppt.ma";
       
        }
        if(nom[0].value === ""){
            nom[0].value="";
            nom[0].placeholder="Vous avez oublier votre nom";
        }
        if(prénom[0].value === ""){
            prénom[0].value="";
            prénom[0].placeholder="Vous avez oublier votre prénom";
        }
    }
     
}
function backFunct(){
    
    form2.style.display="none";
    form1.style.display="block";
    email[0].value="";
    email[0].placeholder="example@ofppt.ma";
    nom[0].value="";
    nom[0].placeholder="Nom";
    prénom[0].value="";
    prénom[0].placeholder="Prénom";
    genre[0].checked=false;
    genre[1].checked=false;
    fil.value="";
    groups.value="";
    for(let i = 0; i<checkboxesArr.length; i++){
        checkboxesArr[i].checked=false;
    }
}

    for(let checkbox of checkboxesArr){
        checkbox.addEventListener("change", function () {
            let checkboxesArray = document.querySelectorAll("input[type='checkbox']:checked");
            if(checkboxesArray.length>2){
            
            this.checked = false
            }
         
       })
    }
   
    function addFunction(){
        if((checkboxesArr[0].checked)&&(AI>2)){
            limitClub=true
        }
        if((checkboxesArr[1].checked)&&(hackathon>2)){
            limitClub=true
        }
        if((checkboxesArr[2].checked)&&(music>2)){
            limitClub=true
        }
        if((checkboxesArr[3].checked)&&(sport>2)){
            limitClub=true
        }
        
        let checkvalues = document.querySelectorAll("input[type='checkbox']:checked");
        let table = document.getElementById("table");
        let valeur;
        let selectGenre;
       
    if(checkvalues.length==2){
        valeur = checkvalues[0].value+" et "+checkvalues[1].value;
    }
    else if (checkvalues.length==1){
        valeur = checkvalues[0].value;
    }
    if((checkvalues.length>0) && !(groups.value=="") && !(fil.value=="") && (limitClub==false)){
        if(checkboxesArr[0].checked){
            AI++
        }
        if(checkboxesArr[1].checked){
            hackathon++
        }
        if(checkboxesArr[2].checked){
            music++
        }
        if(checkboxesArr[3].checked){
            sport++
        }
    
        document.getElementById("ereurMessage").innerHTML=""
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        let hommeHeight;
        let femmeHeight;
        let webHeight;
        let mobileHeight;
        if(genre[0].checked){
            selectGenre="H"
            h++
        }
        else if(genre[1].checked){
            selectGenre="F"
            f++
        }
        if(filiere.value ==="Web"){
            w++
        }
        else if (filiere.value==="Mobile"){
            m++
        }
        
        cell1.innerHTML=nom[0].value;
        cell2.innerHTML=prénom[0].value;
        cell3.innerHTML=selectGenre;
        cell4.innerHTML=email[0].value;
        cell5.innerHTML=filiere.value;
        cell6.innerHTML=groups.value;
        cell7.innerHTML=valeur;
        i++
        document.getElementById("Totale").innerHTML= i;
       
        hommeHeight = ((h/i)*100).toFixed(2);
        hommeHeight.toString();
        hommeHeight += "%"
        
        femmeHeight = ((f/i)*100).toFixed(2);
        femmeHeight.toString();
        femmeHeight += "%"

        webHeight = ((w/i)*100).toFixed(2);
        webHeight.toString();
        webHeight += "%"

        mobileHeight = ((m/i)*100).toFixed(2)
        mobileHeight.toString();
        mobileHeight += "%"

        document.getElementsByTagName("span")[0].style.height = hommeHeight;
        document.getElementsByTagName("span")[1].style.height = femmeHeight;
        document.getElementsByTagName("span")[2].style.height = mobileHeight;
        document.getElementsByTagName("span")[3].style.height = webHeight;
        document.getElementById("hommeResult").innerHTML= hommeHeight;
        document.getElementById("femmeResult").innerHTML= femmeHeight;
        document.getElementById("webResult").innerHTML= webHeight;
        document.getElementById("mobileResult").innerHTML= mobileHeight;

        backFunct()
    }
    else if(checkvalues.length == 0 || (groups.value=="") || (fil.value=="")) {
        document.getElementById("ereurMessage").innerHTML="Remplissez les Champs"
    }
    else if(limitClub==true){
        if((AI>2) && (checkboxesArr[0].checked)){
            document.getElementById("ereurMessage").innerHTML ="le club IA est plein"
            limitClub=false
        }
        else if((sport>2)  && (checkboxesArr[3].checked)){
            document.getElementById("ereurMessage").innerHTML ="le club sport est plein"
            limitClub=false
        }
        else if((music>2)  && (checkboxesArr[2].checked)){
            document.getElementById("ereurMessage").innerHTML ="le club music est plein"
            limitClub=false

        }
        else if ((hackathon > 2) && (checkboxesArr[1].checked)){
            document.getElementById("ereurMessage").innerHTML ="le club hackathon est plein"   
            limitClub=false
        }
    }
}