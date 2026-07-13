
function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == ''){
        window.alert("Username is required");
    }
    if (password.length < 8){
        window.alert("Password must be at least 8 characters");
    }

    if (username != '' && password.length >= 8){
        console.log("Login successful");
        
    }
}