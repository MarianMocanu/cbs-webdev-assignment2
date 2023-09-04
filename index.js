emailjs.init("4lpidAktOxgnEhW-_");

window.onload = () => {
  const form = document.getElementById("contact-form");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.style.display = "flex";

    // emailjs.sendForm("default_service", "contact_form", form).then(
    //   function () {
    //     console.log("SUCCESS!");
    //   },
    //   function (error) {
    //     console.log("FAILED...", error);
    //   }
    // );
  });
};

function isDateValid() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  return dayOfWeek !== 5 && dayOfWeek !== 6 && dayOfWeek !== 0;
}

function isFormDataValid() {
  const email = document.getElementById("email").value.trim();
  const pattern = /@cphbusiness\.dk$/i;

  const message = document.getElementById("message").value.trim();
  return pattern.test(email) && message.length > 7;
}

function sendEmail() {}

function resetForm() {
  console.log("TODO");
}

function showFormFeedback() {
  console.log("TODO");
}

function showDateFeedback() {
  console.log("TODO");
}
