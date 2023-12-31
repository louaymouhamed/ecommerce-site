function register() {
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let psw=document.getElementById("psw").value;
    alert(`
Your account
-----------
Your name :${name}
Your phone :${phone}
Your email :${email}
Your password :${psw}
    `)
}