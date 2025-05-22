/*this is for the search bar open and close */
function openSearch(){
    let search = document.getElementById('srch');
    search.style.display = 'flex';
}

function closeSearch(){
  let search = document.getElementById('srch');
    search.style.display = 'none';
}

function validateLoginForm(){
    let email = document.forms["login-form"]["email"].value;
    let password = document.forms["login-form"]["password"].value;
    let isLoginFormValid = true;
    if(email == ""){
        document.getElementById("email-error").innerHTML = "Email is required.";
        isLoginFormValid = false;
    }
    if(password == ""){
        document.getElementById("password-error").innerHTML = "Password is required.";
        isLoginFormValid = false;
    }
    if(isLoginFormValid){
        alert("Login succesfull")
    }
    return isLoginFormValid;
}