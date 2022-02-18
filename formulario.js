   const rut = document.getElementById('rut').value;
   const dv =  document.getElementById('dv').value;
   const nombre =  document.getElementById('nombre').value;
   const apellido =  document.getElementById('apellido').value;
   const comuna =  document.getElementById('comuna').value;
   const TipoVehiculo =  document.getElementById('TipoVehiculo').value;
   const marca =  document.getElementById('marca').value;
   const año =  document.getElementById('año').value;
   const RevisionTecnica =  document.getElementById('RevisionTecnica').value;
   

   function ValidarRut(){
    document.getElementById("rut").addEventListener("blur", (e) => {
      const rut = parseInt( document.getElementById("rut").value );
      
      // NaN (not a number) 
      if( isNaN(rut) ) {
        // es que hay un error en lo que introdujo el usuario
        console.error("el RUT no es número válido");
      }
      
      if( rut.length <= 8) {
        // es válido 
      } else {
        // NO es válido 
        console.error("el RUT está fuera de rango.");
      }
    });
    }
    document.getElementById("dv").addEventListener("blur", (e) => {
      const dv = document.getElementById("dv").value;
      const permitidos = ['0', '1','2','3','4','5','6','7','8','9','k','K'];
      
      if( !permitidos.includes(dv) ) {
        // muestro mensaje de error
        console.error("Dígito verificador NO permitido!!!");
      }
    });
    
 
    
    

      const nombre = document.getElementById("nombre").value;	
      const apellido = document.getElementById("apellido").value;	
      const mensajes = [];
      
      const validacionNombre = validarNombre(nombre);
      if( validacionNombre.length > 0 ) {
        mensajes.push( validacionNombre );
      }
      
      const validacionApellido = validarApellido(apellido);
      if( validacionApellido.length > 0 ) {
        mensajes.push( validacionApellido );
      }
      
      if( mensajes.length == 0 ) {
        guardarDatosContacto(nombre, apellido);
      } else {
        document.getElementById("mensajes").innerHTML = mensajes.join(". ");
      }
      
    
    function validarNombre(nombre) {
      if(nombre.length > 30) {
        return "";
      } else {
        return "incorporar otra vez.";
      }
    }
    
    function validarApellido(apellido) {
      if(apellido.length > 30) {
        return "";
      } else {
        return "incorporar otra vez..";
      }
    }
     //validar 80 digitos .
    function validarDireccion(apellido) {
      if(direccion.length > 80) {
        return "";
      } else {
        return "incorporar otra vez.";
      }
    }

 //validar 20 digitos letras.
    function validarMarca(marca) {
      if(marca.length > 20) {
        return "";
      } else {
        return "incorporar otra vez.";
      }
    }
    
    //validar 20 letras.
    function validarMarca(marca) {
      if(marca.length > 20) {
        return "";
      } else {
        return "incorporar otra vez.";
      }
    }

     //validar 20 letras.
     function validarAño(marca) {
      if(marca.length > 4) {
        return "";
      } else {
        return "incorporar otra vez.";
      }
    }
    
    
    if(dv.value === null || dv.value === ''){
      mensajesError.push('ingresa tu Digito Verificador');
    }
    if(nombre.value === null  || nombre.value === ''){
        mensajesError.push('ingresa tu nombre');   
    }
    if(apellido.value === null || apellido.value === ''){
        mensajesError.push('ingresa tu apellido');
      }
    if(comuna.value === null  || comuna.value === ''){
        mensajesError.push('ingresa tu comuna');   
      }
    if(TipoVehiculo.value === null || TipoVehiculo.value === ''){
        mensajesError.push('ingresa el tipo de vehiculo');
      }
    if(marca.value === null  || marca.value === ''){
        mensajesError.push('ingresa tu Rut');   
      }
    if(año.value === null || año.value === ''){
        mensajesError.push('ingresa tu Digito Verificador');
      }
      if(RevisionTecnica.value === null  || RevisionTecnica.value === ''){
        mensajesError.push('ingresa tu Rut');   
      } 

    

  console.log(rut);
  console.log(dv);
  console.log(nombre);
  console.log(apellido);
  console.log(comuna);
  console.log(TipoVehiculo);
  console.log(marca);
  console.log(año);
  console.log(RevisionTecnica);


  function calcular(e){
    e.preventDefault();

  const boton = document.getElementById("btnCalcular");
  boton.addEventListener("click",() => {

  const lavadoExterior = $("lavadoExterior").prop("checked");
  const lavadoMotor = $("lavadoExterior").prop("checked");
  let montoNeto = 0;

  if(lavadoExterior){
    montoNeto = montoNeto +7000;

  }
  if (lavadoMotor){

    montoNeto = montoNeto +5000;
  }

  const impuesto = montoNeto * 0.19;
  const total = montoNeto + impuesto;

  document.getElementsById("neto").innerHTML = '<span>${montoNeto}</span>';
  document.getElementsById("iva").innerHTML = '<span>${impuesto}</span>';
  document.getElementsById("total").innerHTML = '<span>${total}</span>';

});

  
  }



  


