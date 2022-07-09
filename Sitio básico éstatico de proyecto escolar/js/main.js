document.getElementById("h22").innerHTML = "Mostrar menú"; 
function myFunction() {
var navid =document.getElementById("nav");



if (navid.style.display === "none") {
    navid.style.display = "block";
    document.getElementById("h22").innerHTML = "Ocultar menú"; 
    } else {
        navid.style.display = "none";
        document.getElementById("h22").innerHTML = "Mostrar menú"; 
    }
}



