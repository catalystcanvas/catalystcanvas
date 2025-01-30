// const scriptURL = 'https://script.google.com/macros/s/AKfycbz8s_-fhMbEsKFQFnRPpGg1D-zI_gw1LYy7ab-H2TM5JCg9x7P0VtEZ_fcOPqnwA4Rf/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
//   e.preventDefault(); // Prevent form's default submission

//   fetch(scriptURL, { 
//       method: 'POST', 
//       body: new FormData(form)
//   })
//   .then(response => {
//       alert("Thank you! We will reach you soon");
//       setTimeout(() => { 
//           window.location.reload(); 
//       }, 1500); // Delay reload to allow the alert to display
//   })
//   .catch(error => {
//       console.error('Error!', error.message);
//       alert("Something went wrong! Please try again.");
//   });
// });
///////////////for mobile no format ///////////////////////
// const phoneInput = document.getElementById("phone");

// phoneInput.addEventListener("invalid", function (event) {
//   if (phoneInput.value !== "" && !/^\d+$/.test(phoneInput.value)) {
//     event.preventDefault(); // Prevent form submission
//     alert("Invalid input! Please enter numbers only."); // Custom alert
//   }
// });



// ////////////////////////////////////////////////////

const scriptURL = 'https://script.google.com/macros/s/AKfycbz8s_-fhMbEsKFQFnRPpGg1D-zI_gw1LYy7ab-H2TM5JCg9x7P0VtEZ_fcOPqnwA4Rf/exec';
const form = document.forms['contact-form'];
const popup = document.getElementById('popup');
const overlay = document.getElementById('popup-overlay');
const closeButton = document.getElementById('popup-close');
const submitButton = form.querySelector('input[type="submit"]'); // Form submit button

// Ensure the submit button is enabled initially
// submitButton.disabled = false;

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form behavior

  // Disable the submit button to prevent multiple clicks
  submitButton.disabled = true;
  submitButton.value = "Sending..."; // Indicate progress

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form),
  })
    .then((response) => {
      if (response.ok) {
        showPopup('Thank you! We’ll get back to you soon.');
      } else {
        throw new Error('Failed to submit form.');
      }
    })
    .catch((error) => {
      console.error('Error!', error.message);
      showPopup('Something went wrong! Please try again.');
    })
    .finally(() => {
      // Reset form and re-enable the submit button
      form.reset();
      submitButton.disabled = false;
      submitButton.value = "Send"; // Reset the button text
    });
});

// Function to show popup
function showPopup(message) {
  popup.querySelector('span').innerText = message;
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Attach close event to the close button
closeButton.addEventListener('click', closePopup);



