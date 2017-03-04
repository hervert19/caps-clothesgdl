function validar()
{
  var contrasena, correo;
  contrasena = document.getElementById('password').value;
  correo = document.getElementById('identificador').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var expresion2= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&][^'\s]/;

  if(password === "" || correo === "")
  {
    //alert("Todos los campos son obligatorios");
    return false;
  }
  else if (!expresion.test(correo))
  {
    alert("Correo no valida");
    return false;
  }
  else if(contrasena.length<5)
  {
    alert("La contraseña es muy corta");
    return false;
  }
  else if(contrasena.length>15)
  {
    alert("La contraseña es muy larga");
    return false;
  }
  else if(!expresion2.test(contrasena))
  {
    alert("Contraseña no valida, debe tener al menos: \n\t Una letra mayuscula \n\t Una letra minuscula \n\t Un digito \n\t Un caracter especial");
    return false;
  }
}
