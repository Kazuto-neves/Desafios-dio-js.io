const THEME = document.getElementById("theme");
const DARKTHEMECLASS = "dark-mode";
const LIGHTTHEMECLASS = "light-mode";
const H1 = document.getElementById("page-title");
const BODY = document.getElementsByTagName("body")[0];
const FOOTER = document.getElementsByTagName("footer")[0];

THEME.addEventListener("click", changeTheme);

function changeTheme() {
  changeClasses();
  changeText();
  changeIcon();
}

function changeClasses() {
  if (BODY.classList.contains(DARKTHEMECLASS)) {
    THEME.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
    H1.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
    BODY.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
    FOOTER.classList.replace(DARKTHEMECLASS, LIGHTTHEMECLASS);
  } else {
    THEME.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
    H1.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
    BODY.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
    FOOTER.classList.replace(LIGHTTHEMECLASS, DARKTHEMECLASS);
  }
}

function changeText() {
  const lightMode = "Light Mode";
  const darkMode = "Dark Mode";
  BODY.classList.contains(DARKTHEMECLASS)
    ? (H1.innerHTML = darkMode + " ON")
    : (H1.innerHTML = lightMode + " ON");
}

function changeIcon() {
  const ICON = document.getElementsByTagName("i")[0];
  BODY.classList.contains(DARKTHEMECLASS)
    ? ICON.classList.replace("fa-sun", "fa-moon")
    : ICON.classList.replace("fa-moon", "fa-sun");
}
