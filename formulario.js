/*Validar

1)  Rut  	: Solo números	8 dígitos.
2)	Digito verificador	: Números, k y K.	1 dígito.
3)	Nombre	: Solo letras. 	30 dígitos.
4)	Apellido	: Solo letras.	30 dígitos.
5)	Dirección	: Letras, números y espacios.	80 dígitos.
6)	Comuna	: OMITIR.

8.	Para los vehículos son:

a)	Tipo de Vehículo (furgón, automóvil, camión, camioneta yS moto)	: OMITIR.
b)	Marca	: Solo letras	20 dígitos.
c)	Modelo	: Solo letras.	20 dígitos.
d)	Año	: Solo números.	4 dígitos.
e)	Revisión técnica al día	: OMITIR.
   10.	Calcular el total a pagar CON impuesto (19%), de los servicios realizados al 
   automóvil del cliente y enviar un mensaje señalando el nombre del cliente junto con 
   el total a pagar. Utilizar un botón para realizar el cálculo.
   
  */ 

   function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
} 

function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {

      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}


  setInputFilter(document.getElementById("nombre"), function(value) {
  return /^[a-z]*$/i.test(value); });

  
  setInputFilter(document.getElementById("direccion"), function(value) {
  return /^[A-Za-z0-9 _][A-Za-z0-9][A-Za-z0-9 _]*$/i.test(value); });

  setInputFilter(document.getElementById("marca"), function(value) {
  return /^[a-z]*$/i.test(value); });




  function Calcular(e){
    e.preventDefault();

 // const boton = document.getElementById("btnCalcular");
  //boton.addEventListener("click",() => {-->
  //const lavadoExterior = $("lavadoExterior").prop("checked");
  //const lavadoMotor = $("lavadoExterior").prop("checked");
  //let montoNeto = 0;

  const lavadoExterior = document.getElementById('lavadoExterior').value;
  const lavadoMotor =  document.getElementById('lavadoMotor').value;
  const montoNeto = 0;
  const total = 0;
  const iva =  montoNeto * 0.19;
  const precio1 = 7000;
  const precio2 = 5000;
  const precio = 0;

  
  if(lavadoExterior.value === null  || lavadoExterior.value === ''){
    mensajesError.push('Selecciona servicio');
  }

  if(lavadoMotor.value === null || lavadoMotor.value === ''){
    mensajesError.push('Selecciona servicio');
  
  }


  if(lavadoExterior){
   precio = iva * precio1;

  }
   if (lavadoMotor){
  precio = iva * precio2;
  
   }
   else{
   montoNeto =  iva + precio;



   }


  
  total = montoNeto + iva;


 document.getElementsById("neto").innerHTML = '<span>${montoNeto}</span>';
 document.getElementsById("iva").innerHTML = '<span>${iva}</span>';
document.getElementsById("total").innerHTML = '<span>${total}</span>';

};

  
  



  


