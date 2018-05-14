var firstName = [];
var lastName = [];
var userName = [];
var password = [];
$(document).ready(function() {
    $("#log, #use").hide();
    $("#login").click(login);
    $("#signUp").click(signUp);


});

function login() {
    $("#log").show();
    $("#use").hide();

    var usernameLogins = $("#userlogin").val();
    var userpassLogins = $("#userPassword").val();
    for (var i = 0; i < localStorage.length; i++) {
        var tempUserstorage = localStorage.getItem("firstName", "userName");
        var logUserIn = localStorage.firstName.split(",");
        var passName = localStorage.passName.split(",");
        if (i % 2 !== 0) {
            if (userpassLogins == passName[i]) {
                $("#userlogin, #userPassword").val("");
                $("#helloUser").html("Welcome " + (logUserIn[i]));
                localStorage.setItem("currentUser", logUserIn[i])
                $("#log,#use").hide();
                break;
            } else {
                $("#helloUser").html("Incorrect Username or Password");
            }
        }
    }
}

function signUp() {

    $("#use").show();
    $("#log").hide();
    firstName.push($("#fName").val());
    lastName.push($("#lName").val());
    userName.push($("#userLog").val());
    password.push($("#userPass").val());
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("userName", userName);
    localStorage.setItem("passName", password);
    $("#fName, #lName, #userLog, #userPass").val("");

};
