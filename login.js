/*Para ingresar al login se debe utilizar
Usuario y Contraseña */
function login(e){
    e.preventDefault();
  
   let Usuario = document.getElementById('usuario').value;
   let Correo =  document.getElementById('email').value;
    let Contraseña =  document.getElementById('password').value;

    var mensajesError = [];

  
    if(Usuario.value === null  || Usuario.value === ''){
      mensajesError.push('ingresa tu usuario');
   
    }
    if(Correo.value === null || Correo.value === ''){
        mensajesError.push('ingresa tu Correo');
      
      }
  
    if(Contraseña.value === null || Contraseña.value === ''){
      mensajesError.push('ingresa tu Contraseña');
    
    }
   
  console.log(Contraseña);
  console.log(Correo);
  console.log(Usuario);
 /* window.location="Bienvenido.html";*/ 

    return false;
  
  
  }

  function Iniciar(e){
    e.preventDefault();

    window.location="Bienvenido.html";
     }

