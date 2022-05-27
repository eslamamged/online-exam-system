var email = document.getElementById("useremail");
var password = document.getElementById("userpass");
var regEmail = localStorage.getItem("useremail");
var regPassword = localStorage.getItem("userpassword");
var error_message = document.getElementById("error_msg");
var form = document.getElementById("LoginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value == "" && password.value == "") {
    error_message.style.display = "inline-block";
    return false;
  }
  if (email.value == "") {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "Please write your email";
    return false;
  }
  if (password.value == "") {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "Please write your password";
    return false;
  }
  if (!email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "please write your email correct";
    return false;
  }
  if (email.value !== regEmail || password.value !== regPassword) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "invalid email or password";
    return false;
  } else {
    location.replace("./../homePage/Home.html");
  }
});
