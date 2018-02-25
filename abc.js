function register() {

    var email,password;
    email = document.getElementById("user").value;
    password = document.getElementById("pwd").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    }).then(function(user){
        alert("Successfully Registered ,UID:"+user.uid);
    });
    alert("Registered Successfully");
    window.location.reload(true);
}

function log()
{
    var email,password;
    email = document.getElementById("user").value;
    password = document.getElementById("pwd").value;
    firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
    alert('Login Successful');
    }).catch(function(error){
            alert(error.code+'   Login Failed');
        });
    window.location.reload(true);
}
