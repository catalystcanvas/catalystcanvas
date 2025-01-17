const scriptURL = 'https://script.google.com/macros/s/AKfycbz8s_-fhMbEsKFQFnRPpGg1D-zI_gw1LYy7ab-H2TM5JCg9x7P0VtEZ_fcOPqnwA4Rf/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent form's default submission

  fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form)
  })
  .then(response => {
      alert("Thank you! We will reach you soon");
      setTimeout(() => { 
          window.location.reload(); 
      }, 1500); // Delay reload to allow the alert to display
  })
  .catch(error => {
      console.error('Error!', error.message);
      alert("Something went wrong! Please try again.");
  });
});
