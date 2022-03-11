var indexofquestion = 0;
var result = 0;
var arr_ans = [];
var time_exam = 300;
var random_arr = [];
var index_random;
var q = document.getElementById("text_question");
var labe1_1 = document.getElementById("q1");
var labe1_2 = document.getElementById("q2");
var labe1_3 = document.getElementById("q3");
var labe1_4 = document.getElementById("q4");
var next = document.getElementById("nexbutn");
var previous = document.getElementById("prvbutn");
var sub_mit = document.getElementById("subbutn");
var mark = document.getElementById("markbutn");
var markside = document.getElementById("side");
var numberQ = document.getElementById("num_Q");
var inputs = document.getElementsByClassName("selected");
var div_radio_btn = document.getElementById("question");
var time_section = document.getElementById("timer");
var radioBtns = document.querySelectorAll("input");
function Questions(ques, choices, answer) {
  this.ques = ques;
  this.choices = choices;
  this.answer = answer;
}

function Choices(answer, id) {
  this.answer = answer;
  this.id = id;
}

var questions = [
  new Questions(
    "What Is The Capital Of Egypt ?",
    [
      new Choices("cairo", 0),
      new Choices("aswan", 1),
      new Choices("ismailia", 2),
      new Choices("giza", 3),
    ],
    0
  ),

  new Questions(
    "What is the result of 2*2 ?",
    [
      new Choices("20", 0),
      new Choices("8", 1),
      new Choices("4", 2),
      new Choices("1", 3),
    ],
    2
  ),

  new Questions(
    "What is the result of 2*10 ?",
    [
      new Choices("5", 0),
      new Choices("20", 1),
      new Choices("12", 2),
      new Choices("22", 3),
    ],
    1
  ),

  new Questions(
    "What is the result of 2*100 ?",
    [
      new Choices("102", 0),
      new Choices("100", 1),
      new Choices("98", 2),
      new Choices("200", 3),
    ],
    3
  ),

  new Questions(
    "What is the result of 50+50 ?",
    [
      new Choices("40", 0),
      new Choices("100", 1),
      new Choices("0", 2),
      new Choices("10", 3),
    ],
    1
  ),
];

function random_questions() {
  if (random_arr.length !== questions.length) {
    index_random = questions[Math.floor(Math.random() * questions.length)];
    if (!random_arr.includes(index_random)) {
      random_arr.push(index_random);
    }
    random_questions();
  }
}
random_questions();

function changeQuestion(indexofquestion) {
  q.innerHTML = "Q : " + random_arr[indexofquestion].ques;
  numberQ.innerHTML = indexofquestion + 1;
  labe1_1.innerHTML = random_arr[indexofquestion].choices[0].answer;
  labe1_2.innerHTML = random_arr[indexofquestion].choices[1].answer;
  labe1_3.innerHTML = random_arr[indexofquestion].choices[2].answer;
  labe1_4.innerHTML = random_arr[indexofquestion].choices[3].answer;

  for (var z = 0; z < radioBtns.length; z++) {
    if (radioBtns[z].value == arr_ans[indexofquestion]) {
      radioBtns[z].checked = true;
    } else {
      radioBtns[z].checked = false;
    }
  }
}
changeQuestion(indexofquestion);

next.addEventListener("click", function () {
  if (indexofquestion < random_arr.length - 1) {
    indexofquestion++;
    changeQuestion(indexofquestion);
  }
});

previous.addEventListener("click", function () {
  if (indexofquestion > 0) {
    indexofquestion--;
    changeQuestion(indexofquestion);
  }
});
var arr_mark = [];
mark.addEventListener("click", function () {
  var x = indexofquestion + 1;
  if (!arr_mark.includes(x)) {
    markside.insertAdjacentHTML(
      "beforeend",
      `<p id='${indexofquestion}' onclick='open_mark_q(${indexofquestion})'>` +
        "Mrk-Question " +
        x +
        "</p>"
    );
    arr_mark.push(x);
  } else if (arr_mark.length == 0) {
    markside.insertAdjacentHTML(
      "beforeend",
      `<p id='${indexofquestion}' onclick='open_mark_q(${indexofquestion})'>` +
        "Mrk-Question " +
        x +
        "</p>"
    );
  }
});

function open_mark_q(e) {
  changeQuestion(e);
  var p = document.getElementById(`${e}`);
  indexofquestion = e;
  p.remove();
  arr_mark.splice(arr_mark.indexOf(e), 1);
}

div_radio_btn.addEventListener("click", function (event) {
  if (event.target.classList.contains("selected")) {
    arr_ans[indexofquestion] = event.target.value;
  }
});

sub_mit.addEventListener("click", function () {
  localStorage.setItem("result", get_result());
  localStorage.setItem("numberofquestion", random_arr.length);
  location.replace("result.html");
});

function get_result() {
  for (var i = 0; i < random_arr.length; i++) {
    if (arr_ans[i] == random_arr[i].answer) {
      result++;
    }
  }
  return result;
}

function examTimer() {
  var initial = time_exam;
  function Loading_Time() {
    var min = String(Math.trunc(time_exam / 60)).padStart(2, 0);
    var sec = String(time_exam % 60).padStart(2, 0);
    time_section.textContent = `${min}:${sec}`;
    if (time_exam === 0) {
      clearInterval(timerInterval);
      location.replace("result.html");
    }
    time_section.style.width = (time_exam / initial) * 100 + "%";
    time_exam--;
  }
  Loading_Time();
  var timerInterval = setInterval(Loading_Time, 1000);
}
examTimer();
