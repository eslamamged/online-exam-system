var show_result = document.getElementById("div_result");
var result = localStorage.getItem("result");
var num = localStorage.getItem("numberofquestion");
var Fname_user = localStorage.getItem("firstname");
var Lname_user = localStorage.getItem("lastname");

show_result.innerHTML =
  "Dear Student " +
  Fname_user +
  " " +
  Lname_user +
  " <br> Your Result is " +
  (result / num) * 100 +
  "%";
localStorage.setItem("result", 0);
