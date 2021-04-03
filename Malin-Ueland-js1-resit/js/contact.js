const contactForm = document.querySelector("#contactForm");
const contactHtml = document.querySelector(".form-group")

contactHtml.innerHTML += `<input class="form-control" name="lastName" id="lastName" placeholder="Last name" />
                          <div class="form-error" id="lastNameError">Last name must have a minimum length of 3 letters</div>
                          <input class="form-control" name="email" id="email" placeholder="Email" />
                          <div class="form-error" id="emailError">Please enter a valid email address</div>
                          <input class="form-control" name="subject" id="subject" placeholder="Subject" />
                          <div class="form-error" id="subjectError">Subject must have a minimum length of 7 letters</div>
                          <input class="form-control" name="message" id="message" placeholder="Message" />
                          <div class="form-error" id="messageError">Message must have a minimum length of 15 letters</div>`;

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

function validateForm() {
event.preventDefault();
    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    if (checkLength(lastName.value, 2) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    if (checkLength(subject.value, 6) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }
    if (checkLength(message.value, 14) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if (checkLength(firstName.value, 0) === true 
        && validateEmail(email.value) === true 
        && checkLength(message.value, 14) === true) {
        contactForm.reset();
        contactForm.innerHTML += "Thank you for your message!"
    }
    
}

function checkLength (value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);    
   return patternMatches;
 }

function messageSuccess() {

}

contactForm.addEventListener("submit", validateForm)



