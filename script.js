//Footer
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//Manages mobile nav 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}  

//Email Validation
const emailError = document.createElement('span');
emailError.classList.add('error-message');

const emailContainer = document.getElementsByClassName('email')[0];
emailContainer.appendChild(emailError);

const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
  if (emailInput.value === "") {
      emailError.textContent = "";
      emailError.style.color = '';
      emailInput.style.borderColor = '';
  } else if (isValidEmail(emailInput.value)) {
      emailError.textContent = "Email is valid!";
      emailError.style.color = 'Green';
      emailInput.style.borderColor = 'Green';
  } else {
      emailError.textContent = "Please enter a valid email.";
      emailError.style.color = 'Red';
      emailInput.style.borderColor = 'Red';
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* Email js */
emailjs.init("C6qDQInJMTK5DYYvW");

document.getElementById('contactBox').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_contact-form', 'template_rr28tco', this)
    .then(function(response) {
      console.log('SUCCESS!', response);
      alert('Your message has been sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send your message. Please try again.');
    });
});
