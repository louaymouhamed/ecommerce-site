function login() {
    let email= document.getElementById("email").value;
    let psw= document.getElementById("psw").value;
    alert( `
Your account
-----------
Your email : ${email}   
your psw   : ${psw}
`)

   }

function forgetPsw(){
    prompt('Enter a new password')
   
}
   