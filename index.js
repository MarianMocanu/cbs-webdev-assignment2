emailjs.init("4lpidAktOxgnEhW-_");

const successTitle = "Success";
const errorTitle = "Something went wrong";
const successBody =
  "Thank you for reaching out to us. Your message has been successfully submitted. We appreciate your interest in our services and we will contact you as soon as possible.";
const dateErrorBody =
  "We apologize, but our contact form submission service is only available from Monday to Thursday. Please try again during our regular business hours.";
const emailErrorBody =
  'We are sorry, but the provided email address is not valid. For inquiries, we only accept email addresses with the domain "@cphbusiness.dk."';
const messageErrorBody =
  "We are sorry, but the message you entered is too short. Please provide a message with a minimum of 8 characters to help us better understand your inquiry or request.";
const generalErrorBody =
  "We apologize, but an unexpected error has occurred while processing your request. Our technical team has been notified of this issue, and we are working diligently to resolve it. In the meantime, you can try refreshing the page and attempt your action again.";

window.onload = () => {
  const form = document.getElementById("contact-form");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

  const isDateValid = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek !== 5 && dayOfWeek !== 6 && dayOfWeek !== 0;
  };

  const isEmailValid = () => {
    const email = document.getElementById("email").value.trim();
    const pattern = /@cphbusiness\.dk$/i;
    return pattern.test(email);
  };

  const isMessageValid = () => {
    const message = document.getElementById("message").value.trim();
    return message.length > 7;
  };

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalTitle.textContent = "";
    modalContent.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(isDateValid(), isEmailValid(), isMessageValid());

    if (!isDateValid()) {
      modal.style.display = "flex";
      modalTitle.textContent = errorTitle;
      modalContent.textContent = dateErrorBody;
      return;
    }
    if (!isEmailValid()) {
      modal.style.display = "flex";
      modalTitle.textContent = errorTitle;
      modalContent.textContent = emailErrorBody;
      return;
    }
    if (!isMessageValid()) {
      modal.style.display = "flex";
      modalTitle.textContent = errorTitle;
      modalContent.textContent = messageErrorBody;
      return;
    }

    modal.style.display = "flex";
    modalTitle.textContent = successTitle;
    modalContent.textContent = successBody;

    emailjs.sendForm("default_service", "contact_form", form).then(
      function () {
        modal.style.display = "flex";
        modalTitle.textContent = successTitle;
        modalContent.textContent = successBody;
      },
      function (error) {
        modal.style.display = "flex";
        modalTitle.textContent = errorTitle;
        modalContent.textContent = generalErrorBody;
      }
    );
  });
};
