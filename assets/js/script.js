var sendButton = document.querySelector(".send");
var username = document.querySelector(".username")
var email = document.querySelector(".email")
var phone = document.querySelector(".phone")
var userCheck=false
var emailCheck=false
var numberCheck=false
var userWarn = document.querySelector(".user-warn");
var mailWarn = document.querySelector(".mail-warn");
var numWarn = document.querySelector(".num-warn");
var loginText = document.querySelector(".login-text")
var emailPattern = /\S+@\S+\.\S+/;
var numPattern = /^\(?([0-9]{3})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/;


sendButton.addEventListener('click',function(){
    username.value.length >= 6      ? userCheck=true    : userCheck=false;
    email.value.match(emailPattern) ? emailCheck=true   : emailCheck=false;
    phone.value.match(numPattern)   ? numberCheck=true  : numberCheck=false;
    !userCheck      ? userWarn.classList.add("active-warn")   : userWarn.classList.remove("active-warn")
    !emailCheck     ? mailWarn.classList.add("active-warn")   : mailWarn.classList.remove("active-warn")
    !numberCheck    ? numWarn.classList.add("active-warn")    : numWarn.classList.remove("active-warn")
  
    userCheck && emailCheck && numberCheck ? loginText.classList.add("active-warn") : loginText.classList.remove("active-warn")
})