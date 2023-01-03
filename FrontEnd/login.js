
let inputs = document.getElementsByClassName('inputText');

document
  .getElementById("buttonLogin")
  .addEventListener("click", function(e) {
    let user = {
        email: inputs[0].value,
        password: inputs[1].value
      };
    console.log(JSON.stringify(user));
    fetch('http://localhost:5678/api/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(user)
        })
        .then(function(res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function(value) {
          localStorage.setItem("email", user.email);
          localStorage.setItem("password", user.password);
          localStorage.setItem("token", value.token);
          document.location.href="index.html";
        })
        .catch(function(err) {
          alert("Wrong mail or password");
        });
});

// session / localStorage   jwt/ Node -> doc session

// email: sophie.bluel@test.tld

// password: S0phie 