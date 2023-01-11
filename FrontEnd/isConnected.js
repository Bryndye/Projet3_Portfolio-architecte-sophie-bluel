function tokenIsValid(){
  if(localStorage.getItem('token') == null){
    return false;
  }
  const base64Url = localStorage.getItem('token').split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decoded = JSON.parse(atob(base64));
  
  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (decoded.exp < currentTimestamp) {
    // console.log('The JWT has expired');
    localStorage.clear();
    buttonLogin.addEventListener('click', function(){
      alert('Vous êtes déconnectés. Veuillez vous reconnecter');
      document.location.href="login.html";
    })
    return false;
  } 
  else {
    // console.log('The JWT is still valid');
    return true;
  }
}


let buttonLogin = document.getElementById('login');

if ('token' in localStorage) {
    // Connecté
    if(tokenIsValid())
    {
      buttonLogin.innerHTML = "logout";

      buttonLogin.addEventListener('click', function(){
          localStorage.clear();
          document.location.href="index.html";
      });
    }
} 
else {
  // Non connecté
  let allEdit = document.getElementsByClassName('edit');
for (let i = 0; i < allEdit.length; i++) {
  allEdit[i].style.display = 'none';
}
  buttonLogin.addEventListener('click', function(){
      document.location.href="login.html";
  })
}
  
