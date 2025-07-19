document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
      formMessage.style.display = "block";
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill in all fields.";
    } else {
      formMessage.style.display = "block";
      formMessage.style.color = "green";
      formMessage.textContent = "Message sent successfully!";
      form.reset();
    }
  });
});
