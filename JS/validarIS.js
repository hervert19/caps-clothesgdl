function validar()
{
  var contrasena, correo;
  contrasena = document.getElementById('password').value;
  correo = document.getElementById('identificador').value;

  var expresion =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var expresion2= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&][^'\s]/;

  if(correo === "" || contrasena === "")
  {
    swal('Oops...','Todos los campos deben de ser llenados!','error')
    return false;
  }
  else if (!expresion.test(correo))
  {
    document.getElementById("WVC").innerHTML="Correo no valido";
    document.getElementById("WVC").style.display="block";
    return false;
  }
}
