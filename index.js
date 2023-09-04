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
  // removing whitespaces
  const nameInput = document.getElementById("name");
  nameInput.addEventListener("blur", () => (nameInput.value = nameInput.value.trim()));
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("blur", () => (emailInput.value = emailInput.value.trim()));
  const messageInput = document.getElementById("message");
  messageInput.addEventListener("blur", () => (messageInput.value = messageInput.value.trim()));

  const resetForm = () => {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  };

  // date validation
  const isDateValid = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek !== 5 && dayOfWeek !== 6 && dayOfWeek !== 0;
  };

  // email validation
  const isEmailValid = () => {
    const email = document.getElementById("email").value.trim();
    const pattern = /@cphbusiness\.dk$/i;
    return pattern.test(email);
  };

  // message validation
  const isMessageValid = () => {
    const message = document.getElementById("message").value.trim();
    return message.length > 7;
  };

  const form = document.getElementById("contact-form");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalTitle = document.getElementById("modal-title");
  const modalContent = document.getElementById("modal-content");

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
        resetForm();
      },
      function (error) {
        modal.style.display = "flex";
        modalTitle.textContent = errorTitle;
        modalContent.textContent = generalErrorBody;
        console.log("Error", error);
      }
    );
  });
};
