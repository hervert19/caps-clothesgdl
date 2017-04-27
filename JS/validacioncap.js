function show_hide() {
  var valor= document.getElementById('tipo').value;
if(valor === "2") {
document.getElementById('seleccionar').style.display = "block";
document.getElementById('seleccionar1').style.display = "none";
document.getElementById('seleccionar2').style.display = "none";
} else if(valor === "1"){
document.getElementById('seleccionar1').style.display = "block";
document.getElementById('seleccionar').style.display = "none";
document.getElementById('seleccionar2').style.display = "none";
}else if(valor === "3"){
document.getElementById('seleccionar1').style.display = "none";
document.getElementById('seleccionar').style.display = "none";
document.getElementById('seleccionar2').style.display = "block";
}
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}

function myFunction() {
    var x = document.getElementById("modi").value;
    if(x === "1")
    {
      document.getElementById("myp").innerHTML = "Escribe el nuevo Nombre";
      document.getElementById('nuevo').style.display = "block";
    }
    else if(x === "2")
    {
      document.getElementById("myp").innerHTML = "Escribe la nueva Fecha";
      document.getElementById('nuevo').style.display = "block";
    }
    else if(x === "3")
    {
      document.getElementById("myp").innerHTML = "Escribe el nuevo Color";
      document.getElementById('nuevo').style.display = "block";
    }
    else if(x === "4")
    {
      document.getElementById("myp").innerHTML = "Escribe el nuevo Costo";
      document.getElementById('nuevo').style.display = "block";
    }
    else if(x === "5")
    {
      document.getElementById("myp").innerHTML = "Escribe la nueva Descripción";
      document.getElementById('nuevo').style.display = "block";
    }
    else if(x === "6")
    {
      document.getElementById("myp").innerHTML = "Escribe la nueva talla";
      document.getElementById('nuevo').style.display = "block";
    }
}
