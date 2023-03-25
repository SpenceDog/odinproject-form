function ComparePass(form){
    passOne = form.pass1.value;
    passTwo = form.pass2.value;

    if(passOne == ''){
        alert("Please enter a password");
    }
    else if(passTwo == ''){
        alert("Please enter the password again");
    }
    else if(passOne != passTwo){
        alert("Please make sure the passwords match");
    }
}