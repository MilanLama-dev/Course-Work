function validateSignUpForm(){
    let name = document.forms["signup-form"]["name"].value;
    let email = document.forms["signup-form"]["email"].value;
    let password = document.forms["signup-form"]["password"].value;
    let confirmPassword = document.forms["signup-form"]["confirm-password"].value;
    let isSignUpFormValid = true;
    
    if(name == ""){
        document.getElementById("name-error").innerHTML = "Name is required.";
        isSignUpFormValid = false;
    }
    if(email == ""){
        document.getElementById("email-error").innerHTML = "Email is required.";
        isSignUpFormValid = false;
    }
    if(password == ""){
        document.getElementById("password-error").innerHTML = "Password is required.";
        isSignUpFormValid = false;
    }
    if(confirmPassword == ""){
        document.getElementById("confirm-password-error").innerHTML = "Confirm Password is required.";
        isSignUpFormValid = false;
    }

    if(password != confirmPassword){
        document.getElementById("confirm-password-error").innerHTML = "Password didn't match.";
        isSignUpFormValid = false;
    }
    if(isSignUpFormValid){
        alert("Signup succesfull")
    }
    return isSignUpFormValid;
}