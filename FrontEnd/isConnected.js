let buttonLogin = document.getElementById('login');

if ('token' in localStorage) {
    // Connecté
    buttonLogin.innerHTML = "logout";

    buttonLogin.addEventListener('click', function(){
        localStorage.clear();
        document.location.href="index.html";
    });
  } else {
    // Non connecté
    buttonLogin.addEventListener('click', function(){
        document.location.href="login.html";
    })
  }
  
