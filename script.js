function mensaje(){
    alert("Cargando reporte del Clima");
}
setTimeout(mensaje, 10);

let osorno=document.getElementById("sosorno");
osorno.addEventListener("click", function(){
    document.getElementById("osorno").style.display="block";
    document.getElementById("rio-bueno").style.display="none";
    document.getElementById("la-union").style.display="none";
    document.getElementById("puerto-montt").style.display="none";
    document.getElementById("lago-ranco").style.display="none";
});
let riob=document.getElementById("srio-bueno");
riob.addEventListener("click", function(){
    document.getElementById("osorno").style.display="none";
    document.getElementById("rio-bueno").style.display="block";
    document.getElementById("la-union").style.display="none";
    document.getElementById("puerto-montt").style.display="none";
    document.getElementById("lago-ranco").style.display="none";
});
let union=document.getElementById("sla-union");
union.addEventListener("click", function(){
    document.getElementById("osorno").style.display="none";
    document.getElementById("rio-bueno").style.display="none";
    document.getElementById("la-union").style.display="block";
    document.getElementById("puerto-montt").style.display="none";
    document.getElementById("lago-ranco").style.display="none";
});
let puerto=document.getElementById("spuerto-montt");
puerto.addEventListener("click", function(){
    document.getElementById("osorno").style.display="none";
    document.getElementById("rio-bueno").style.display="none";
    document.getElementById("la-union").style.display="none";
    document.getElementById("puerto-montt").style.display="block";
    document.getElementById("lago-ranco").style.display="none";
});
let lago=document.getElementById("slago-ranco");
lago.addEventListener("click", function(){
    document.getElementById("osorno").style.display="none";
    document.getElementById("rio-bueno").style.display="none";
    document.getElementById("la-union").style.display="none";
    document.getElementById("puerto-montt").style.display="none";
    document.getElementById("lago-ranco").style.display="block";
});

let eliminar=document.getElementById("eliminar");
eliminar.addEventListener("click", function(){
    eliminar.parentElement.remove();
})