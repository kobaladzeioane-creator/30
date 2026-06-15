const form = document.getElementById("subscribeForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  if (!email) {
    message.style.color = "red";
    message.textContent = "Please enter your email.";
    return;
  }

  fetch("PASTE_YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email })
  })
    .then(response => response.json())
    .then(data => {
      message.style.color = "#5fff8a";
      message.textContent = "Thank you! You are subscribed.";
      emailInput.value = "";
    })
    .catch(error => {
      message.style.color = "red";
      message.textContent = "Something went wrong. Try again.";
    });
});