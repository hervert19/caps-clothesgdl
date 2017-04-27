function  validar()
{
  var nombre, email, mensaje;

  nombre = document.getElementById('nombre').value;
	email = document.getElementById('email').value;
  mensaje = document.getElementById('mensaje').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(nombre === "" || email === "" || mensaje === "")
  {
    alert("Todos los campos deben de ser llenados")
    return false;
  }
  else if (nombre.length>15)
  {
    document.getElementById("WVN").innerHTML="Nombre muy extenso";
    document.getElementById("WVN").style.display="block";
    return false;
  }
  else if (!expresion.test(email))
  {
    document.getElementById("WVC").innerHTML="Correo no valido";
    document.getElementById("WVC").style.display="block";
  return false;
  }
  else if (mensaje.length>500)
  {
    document.getElementById("WVM").innerHTML="Mesaje muy extenso, limite de 500 caraceteres";
    document.getElementById("WVM").style.display="block";
    return false;
  }
}
