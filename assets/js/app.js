(function() {
  var formulario = document.getElementById('formulario');
  var objForm = [
    {nameForm:document.getElementById('datename'), msgForm:document.createElement('div'), classForm:'error-datename', msgVacio:'Por favor, ingrese su nombre', msgError:'La letra de esta palabra debe empezar con mayúscula'},
    {nameForm:document.getElementById('datelastname'), msgForm:document.createElement('div'), classForm:'error-datelastname', msgVacio:'Por favor, ingrese su apellido', msgError:'La letra de esta palabra debe empezar con mayúscula'},
    {nameForm:document.getElementById('dni'), msgForm:document.createElement('div'), classForm:'error-dni', msgVacio:'Por favor, ingrese su DNI', msgError:'Debe contener 8 dígitos y sólo números'},
    {nameForm:document.getElementById('date'), msgForm:document.createElement('div'), classForm:'error-date', msgVacio:'Por favor, ingrese su Fecha de Nacimiento', msgError:'Por favor, ingrese su fecha de nacimiento'},
    {nameForm:document.getElementById('celular'), msgForm:document.createElement('div'), classForm:'error-celular', msgVacio:'Por favor, ingrese su Numero de Celular', msgError:'Por favor, ingrese su numero de celular'},
    {nameForm:document.getElementById('fono'), msgForm:document.createElement('div'), classForm:'error-fono', msgVacio:'Por favor, ingrese su Numero de Telefono', msgError:'Por favor, ingrese su numero de telefono'},
    {nameForm:document.getElementById('contrasenia'), msgForm:document.createElement('div'), classForm:'error-contrasenia', msgVacio:'Por favor, ingrese su Contraseña', msgError:'Debe contener al menos 6 caracteres'},
    {nameForm:document.getElementById('confirmcontrasenia'), msgForm:document.createElement('div'), classForm:'error-confirmcontrasenia', msgVacio:'Por favor, ingrese su Contraseña', msgError:'Su contraseña no coincide con la ingresada'},
    {nameForm:document.getElementById('coment'), msgForm:document.createElement('div'), classForm:'error-coment', msgVacio:'Por favor, ingrese su Comentario', msgError:'Debe contener al menos 10 caráteres'},
  ]
    objForm.forEach(function(e){
      e.nameForm.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
          e.nameForm.className    = 'invalid';
          e.msgForm.classList.add(e.classForm);
          e.msgForm.style.display = 'block';
          if (e.nameForm.value.length == "0"){
            e.msgForm.textContent   = e.msgVacio;
          }
          else{
            e.msgForm.textContent   = e.msgError;
            if(e.nameForm == 'confirmcontrasenia' && e[i-1].nameForm.textContent != e.nameForm.textContent){
              e.msgForm.textContent   = e.msgError;
            }
          }
          formulario.insertBefore(e.msgForm, e.nameForm.nextSibling);
        }
      });

      e.nameForm.addEventListener('input', function(event){
        if ( 'block' === e.msgForm.style.display) {
          e.nameForm.className = '';
          e.msgForm.style.display = 'none';
        }
      });

    });

})();
