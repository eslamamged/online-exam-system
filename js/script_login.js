var email = document.getElementById("useremail");
var password = document.getElementById("userpass");
var regEmail = localStorage.getItem("useremail");
var regPassword = localStorage.getItem("userpassword");
var error_message = document.getElementById("error_msg");
function validlogin() {
  if (email.value == "" || password.value == "") {
    error_message.style.display = "inline-block";
    return false;
  }
  if (!email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "please write your email correct";
    return false;
  }
  if (email.value !== regEmail || password.value !== regPassword) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "please write your email and password correct";
    return false;
  } else {
    return true;
  }
}
