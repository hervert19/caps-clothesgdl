function  validar()
{
  var nombre, apellido, edad, correo, contrasena, rcontrasena, expresion;

  nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
  edad = document.getElementById('edad').value;
	correo = document.getElementById('correo').value;
	contrasena = document.getElementById('contrasena').value;
	recontrasena = document.getElementById('rcontrasena').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var expresion2= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&][^'\s]/;
  var expresion3= /^([0-9])*$/;

  if(nombre === "" || apellido === "" || edad === "" || correo === "" || contrasena === "" || recontrasena === "")
  {
    swal('Oops...','Todos los campos deben de ser llenados!','error')
    return false;
  }
  if (nombre.length>30)
  {
    document.getElementById("WVN").innerHTML="Nombre muy extenso";
    document.getElementById("WVN").style.display="block";
    return false;
  }
  if (apellido.length>30)
  {
    document.getElementById("WVA").innerHTML="Apellido muy extenso";
    document.getElementById("WVA").style.display="block";
  return false;
  }
  if (edad <= 17)
  {
    document.getElementById("WVE").innerHTML="Eres menor de edad";
    document.getElementById("WVE").style.display="block";
    return false;
  }
  if (!expresion3.test(edad))
  {
    document.getElementById("WVE").innerHTML="Introduce en digitos tu edad";
    document.getElementById("WVE").style.display="block";
    return false;
  }
  if (edad > 99)
  {
    document.getElementById("WVE").innerHTML="Eres muy viejo";
    document.getElementById("WVE").style.display="block";
    return false;
  }
  if(edad > 17 && edad < 99){
    document.getElementById("WVE").innerHTML="";
  }
  if (!expresion.test(correo))
  {
    document.getElementById("WVC").innerHTML="Correo no valido";
    document.getElementById("WVC").style.display="block";
  return false;
  }
  if (expresion.test(correo))
  {
    document.getElementById("WVC").innerHTML="";
  }
  if (!expresion2.test(contrasena))
  {
    document.getElementById("WVP").innerHTML="Contraseña no valida, debe tener al menos: Una letra mayuscula, una letra minuscula, un digito, un caracter especial";
    document.getElementById("WVP").style.display="block";
  return false;
  }
  if (expresion2.test(contrasena))
  {
    document.getElementById("WVP").innerHTML="";
  }
  if (contrasena.length>20 || recontrasena.length>20)
  {
    document.getElementById("WVP").innerHTML="Contraseña muy extensa";
    document.getElementById("WVP").style.display="block";
    return false;
  }
  if (contrasena.length<20 || recontrasena.length<20)
  {
    document.getElementById("WVP").innerHTML="";
  }
  if (recontrasena !== contrasena)
  {
    document.getElementById("WVRP").innerHTML="Las contraseñas no coinciden";
    document.getElementById("WVRP").style.display="block";
  return false;
  }
  if (recontrasena === contrasena)
  {
    document.getElementById("WVRP").innerHTML="";
  }
}
