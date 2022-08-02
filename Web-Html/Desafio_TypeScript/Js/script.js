const THEME = document.getElementById("Btn-theme");
const DARKTHEMECLASS = "dark-mode";
const LIGHTTHEMECLASS = "light-mode";
const BODY = document.getElementsByTagName("body")[0];
const SPAN = document.getElementById("theme");
const H2 = document.getElementsByTagName("h2")[0];
const DIV = document.getElementById("container");
const A = document.getElementsByClassName("button");
const ICON = document.getElementsByTagName("i")[0];

THEME.addEventListener("click",Theme);

function Theme() {
    changeClasses();
    changeIcon();
}

function changeClasses() {
    if (BODY.classList.contains(DARKTHEMECLASS)) {
      THEME.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
      H2.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
      BODY.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
      DIV.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
      SPAN.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
      for (let i = 0; i < A.length; i++) {
        A[i].classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
        console.log("e");
      }
    } else {
      THEME.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
      H2.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
      BODY.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
      DIV.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
      SPAN.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
      for (let i = 0; i < A.length; i++) {
        A[i].classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
        console.log("f");
      }
    }
  }

  function changeIcon() {
    const ICON = document.getElementsByTagName("i")[0];
    BODY.classList.contains(DARKTHEMECLASS)
      ? ICON.classList.replace("fa-sun", "fa-moon")
      : ICON.classList.replace("fa-moon", "fa-sun");
  }