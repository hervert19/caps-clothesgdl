function  validar()
{
  var nombre, apellido, edad, correo, contrasena, rcontrasena, expresion;

  nombre = document.getElementById('nombre').value;
	apellido = document.getElementById('apellido').value;
  edad = document.getElementById('edad').value;
	correo = document.getElementById('correo').value;
	contrasena = document.getElementById('contrasena').value;
	recontrasena = document.getElementById('rcontrasena').value;
  expresion =  /\w+@\w+\.+[a-z]/;

  if(nombre === "" || apellido === "" || edad === "" || correo === "" || contrasena === "" || recontrasena === "")
  {
    alert("Todos los campos son obligatorios");
    return false;
  }
  else if (nombre.length>30)
  {
    alert("Nombre muy extenso");
    return false;
  }
  else if (apellido.length>30)
  {
    alert("Apellido muy extenso");
  return false;
  }
  else if (edad.length<= 18)
  {
    alert("Eres menor de edad");
    return false;
  }
  else if (correo.length>100)
  {
    alert("Correo muy extenso");
    return false;
  }
  else if (!expresion.test(correo))
  {
    alert("Expresion no valida");
  return false;
  }
  else if (contrasena.length>20 || recontrasena.length>20)
  {
    alert("Contrasena muy extensa");
    return false;
  }
  else if (recontrasena !== contrasena)
  {
    alert("Las contrasenas no soy iguales");
  return false;
  }
}
