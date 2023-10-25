
const validate = function (){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword){
        document.getElementById("pass-err").innerText = "*Passwords do not match";
        console.log("Passwords do not match")
    }
};