(function translate(){
    var login = document.getElementById('form-signin-heading');
          login.innerHTML = "Por favor inicia sesión";
    var input1 = document.getElementById ('inputEmail');
            input1.placeholder = "Correo Electrónico";
    var input2 = document.getElementById ('inputPassword');
            input2.placeholder = "Contraseña"; 
    var ticketRemember = document.querySelector('.checkbox span');
            ticketRemember.innerHTML = "Recordar datos";
    var boton = document.getElementsByTagName('button')[0];
        boton.innerHTML = "Iniciar Sesión";
}) ();