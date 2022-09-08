const getElementById = (id) => {
  const inputField = document.getElementById(id);
  const inputValue = inputField.value;
  return inputValue;
};

document.getElementById("send-name-btn").addEventListener("click", () => {
  const name = getElementById("input-field-name");
  localStorage.setItem("name", name);
});
document.getElementById("send-email-btn").addEventListener("click", () => {
  const email = getElementById("input-field-email");
  localStorage.setItem("email", email);
});
document.getElementById("send-message-btn").addEventListener("click", () => {
  const message = getElementById("input-field-message");
  localStorage.setItem("message", message);
});
document.getElementById("delete-message-btn").addEventListener("click", () => {
  const message = getElementById("input-field-message");
  localStorage.removeItem("message", message);
});
document.getElementById("delete-name-btn").addEventListener("click", () => {
  const name = getElementById("input-field-name");
  localStorage.removeItem("name", name);
});
document.getElementById("delete-email-btn").addEventListener("click", () => {
  const email = getElementById("input-field-email");
  localStorage.removeItem("email", email);
});

document.getElementById("reset-btn").addEventListener("click", () => {
  localStorage.clear();
});

document.getElementById("send-btn").addEventListener("click", () => {
  const name = getElementById("input-field-name");
  const email = getElementById("input-field-email");
  const message = getElementById("input-field-message");
  const person = { Pname: name, pEmail: email, pMessage: message };
  console.log(person);

  localStorage.setItem("perosn", JSON.stringify(person));
});
