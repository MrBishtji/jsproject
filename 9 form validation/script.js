var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var submitbtn = document.getElementById("btn");

function validateName() {
  var name = document.getElementById("fullName").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
  return true;
}
function validatePhone() {
  var phone = document.getElementById("PhoneNo").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "PhoneNo. is required";
    return false;
  }
  if (phone.length !== 10) {
    phoneError.innerHTML = "Phone no should be 10 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Enter a vaild no.";
    return false;
  }
  phoneError.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
  return true;
}
function validateEmail() {
  var email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
  return true;
}
function validateMessage() {
  var message = document.getElementById("message").value;
  var required = 15;
  var left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more character required";
    return false;
  }
  messageError.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
  return true;
}
function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMessage() ||
    !validatePhone()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fill above form.";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  submitbtn.innerHTML = `<i class="ri-checkbox-circle-line"></i>`;
  submitbtn.style.backgroundColor = "green";
  return true;
}
