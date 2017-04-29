(function() {
    var datename = document.getElementById('datename');
    var dni = document.getElementById('dni');
    var form = document.getElementById('form');

    var msg = document.createElement('div');
    msg.id = 'msg';
    msg.className            = 'msg';
    msg.style.display = 'none';

    form.appendChild(msg);

    datename.addEventListener('invalid', function(event){
        event.preventDefault();
        if ( ! event.target.validity.valid ) {
          datename.className    = 'invalid';
          msg.classList.add("error");
          msg.style.display = 'block';
          if (datename.value.length == "0"){
            msg.textContent   = 'Por favor, ingrese sus nombres y apellidos';
          }
          else{
            msg.textContent   = 'La letra de cada palabra debe empezar con mayúscula';
          }
      }
    });

    datename.addEventListener('input', function(event){
        if ( 'block' === msg.style.display ) {
            datename.className = '';
            msg.style.display = 'none';
        }
    });

})();
