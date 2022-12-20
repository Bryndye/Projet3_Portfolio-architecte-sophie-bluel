// const inputsMail = document.getElementById('formLogin');
// const inputsPassword = document.getElementById('inputPassword');
// console.log(inputsMail);
// console.log(document.getElementById('inputPassword'));


// const inputs = document.querySelectorAll('inputText');
// console.log(inputs);
console.log(document.getElementById('inputMail'));
// console.log(document.getElementById('inputPassword'));
// console.log(document.querySelector('#setInputLogin input'));
// console.log(document.getElementById('sectionLogin'));
document.getElementById('inputMail').
    addEventListener("input", function() {
        console.log(document.getElementById('inputMail').target.value);
});