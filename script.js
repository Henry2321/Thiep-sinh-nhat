document.addEventListener("DOMContentLoaded", function () {
  var rsvpBtn = document.getElementById("rsvpBtn");
  var rsvpMessage = document.getElementById("rsvpMessage");

  rsvpBtn.addEventListener("click", function (e) {
    // start endless petals
    startPetals();

    rsvpMessage.classList.remove("hidden");
    // fade in message after it's displayed
    setTimeout(function () {
      rsvpMessage.classList.add("visible");
    }, 10);

    // show love text
    var love = document.getElementById("loveMessage");
    love.classList.remove("hidden");
    setTimeout(function () {
      love.classList.add("visible");
    }, 500);

    rsvpBtn.disabled = true;
    rsvpBtn.textContent = "Đã xác nhận";
  });

  // petal util
  function startPetals() {
    var container = document.getElementById("fireworks");
    if (window._petalInterval) return; // already running
    window._petalInterval = setInterval(function () {
      var x = Math.random() * window.innerWidth;
      createPetal(x, -20, container);
    }, 200);
  }

  function createPetal(x, y, container) {
    var petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = x + "px";
    petal.style.top = y + "px";
    petal.textContent = "🌹";
    container.appendChild(petal);
    // remove after animation ends
    setTimeout(function () {
      if (petal.parentNode === container) container.removeChild(petal);
    }, 5200);
  }

  // password overlay logic
  var overlay = document.getElementById("overlay");
  var passInput = document.getElementById("passInput");
  var passBtn = document.getElementById("passBtn");
  var passMsg = document.getElementById("passMsg");
  var container = document.querySelector(".container");
  var correct = "2309"; // change to desired password

  function checkPassword() {
    // clear previous message
    passMsg.classList.add("hidden");
    console.log("checking password", passInput.value);
    if (passInput.value === correct) {
      console.log("password correct");
      // hide overlay completely and show container
      overlay.classList.add("hidden");
      overlay.style.display = "none"; // extra safety
      container.classList.remove("hidden");
      container.style.display = "flex"; // ensure visible
      // clear input for security
      passInput.value = "";
    } else {
      console.log("password incorrect");
      passMsg.textContent = "Mật mã sai, thử lại.";
      passMsg.classList.remove("hidden");
    }
  }

  passBtn.addEventListener("click", checkPassword);
  passInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      checkPassword();
    }
  });
});
