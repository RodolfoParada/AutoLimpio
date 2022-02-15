
function Enviar(e){
    e.preventDefault();
  
   let rut = document.getElementById('rut').value;
   let dv =  document.getElementById('dv').value;
   let nombre =  document.getElementById('nombre').value;
   let apellido =  document.getElementById('apellido').value;
   let comuna =  document.getElementById('comuna').value;
   let TipoVehiculo =  document.getElementById('TipoVehiculo').value;
   let marca =  document.getElementById('marca').value;
   let año =  document.getElementById('año').value;
   let RevisionTecnica =  document.getElementById('RevisionTecnica').value;
  
    if(rut.value === null  || rut.value === ''){
      mensajesError.push('ingresa tu Rut');   
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

    return false;
  
  
  }
  