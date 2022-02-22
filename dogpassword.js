function checkPassword() {
    // capture the user entered password from our input element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered password:", passwordEntered);
    

    //check if the password is correct
    var sitePassword = "chimken"
    if (passwordEntered == sitePassword) {
        //allow navigation
        console.log("Allow!")
        window.location.assign("dog-members.html");
    }
    else {
        //block navigation
        console.log("Block!");
        //add a new style rule to the incorrect-password element
        document.getElementById("incorrect-password").style.color = "red";
        //add text to the incorrect password element
        document.getElementById("incorrect-password").innerHTML = "Incorrect password. Please try again..."                    
    }
}