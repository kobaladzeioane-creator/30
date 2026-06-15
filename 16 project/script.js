const form = document.getElementById("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  validate("name", v => v !== "");
  validate("phone", v => /^\d{3}\s?\d{3}\s?\d{4}$/.test(v));
  validate("email", v => /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(v));
  validate("message", v => v !== "");
});

function validate(id, rule){
  const input = document.getElementById(id);
  const box = input.parentElement;
  const status = box.querySelector(".status");

  if(rule(input.value.trim())){
    box.className = "input-box success";
    if(status) status.innerText = "✔";
  }else{
    box.className = "input-box error";
  }
}