function nuevosDatos(e){
    e.preventDefault();
    
    var usurio="lolgomez@gmail.com";
    var pass="19982";
    
    var VaCorreo=document.querySelector("#formulario__input").value;
    var VaPass=document.querySelector("#formulario__pass").value;
    
 var idcorreo = document.querySelector("#formulario__label1");
var password = document.querySelector("#contra");
//idcorreo.textContent= "hola"; es un texto
//idcorreo.innerHTML= "<p> hola </p>";
    

  if(VaCorreo==usurio){
     idcorreo.innerHTML= "<p> Correo valido </p>"
   
     }else{
           idcorreo.innerHTML= "<p> Correo no valido </p>";
   
    
     }
    
    
  if( VaPass==pass){
    
     password.innerHTML= "<p> contraseña Valida </p>";
     }else{
     password.innerHTML= " <a > crear cuenta </a>";
         
     }
 

}

var botonIS = document.querySelector("#formulario__submit");

botonIS.addEventListener("click", nuevosDatos);

