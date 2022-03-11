var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("useremail");
var password = document.getElementById("userpass");
var re_password = document.getElementById("repass");
var error_message = document.getElementById("error_msg");

function validReg() {
  if (
    firstname.value == "" ||
    lastname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    re_password.value == ""
  ) {
    error_message.style.display = "inline-block";
    return false;
  }
  if (!isNaN(firstname.value)) {
    error_message.style.display = "inline-block";
    error_message.innerHTML =
      "Your First Name Must Be a Alphabetical Characters";
    return false;
  }
  if (!isNaN(lastname.value)) {
    error_message.style.display = "inline-block";
    error_message.innerHTML =
      "Your Last Name Must Be a Alphabetical Characters";
    return false;
  }
  if (!email.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "please write your email correct";
    return false;
  }
  if (password.value.length < 8) {
    error_message.style.display = "inline-block";
    error_message.innerHTML =
      "Password must be Greater than or equal 8 character";
    return false;
  }
  if (password.value !== re_password.value) {
    error_message.style.display = "inline-block";
    error_message.innerHTML = "please write your re_password correct";
    return false;
  } else {
    localStorage.setItem("firstname", firstname.value);
    localStorage.setItem("lastname", lastname.value);
    localStorage.setItem("useremail", email.value);
    localStorage.setItem("userpassword", password.value);
    return true;
  }
}
