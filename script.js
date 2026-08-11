// REALLIFE TRADING

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert(
    "Thank you for contacting REALLIFE TRADING. " +
    "We will get back to you soon."
  );

  form.reset();
});
