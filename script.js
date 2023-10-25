
const validate = function (){
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value){
        document.getElementById("pass-err").innerText = "*Passwords do not match";
        console.log("Passwords do not match")
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
    }
};