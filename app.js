function incress () {
var incress = document.getElementById("zero");
var zero =  incress.innerHTML
++zero;
document.getElementById("zero").innerHTML = zero; 
}
function reset () {
    var reset = document.getElementById("zero");
    var zero =  reset.innerHTML = 0;
}
function decress () {
    var decress = document.getElementById("zero");
    var zero =  decress.innerHTML ;
    -- zero;
    document.getElementById("zero").innerHTML = zero;
}