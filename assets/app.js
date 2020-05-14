$(document).ready(function () {
    console.log('Hello world!2');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz9ykRXhZW2BWB2TltdfrAkqneAX-dUrvnZ2yciGLotYIiBTV8/exec'
    const form = $("#order-details")

    form.submit(e => {
       e.preventDefault()
       fetch(scriptURL, { method: 'POST', body: new FormData(form) })
           .then(response => {
               console.log('Success!', response)
               // empty form fields
               $('#num-boxes').val('');
               $('#delivery-date').val('');
               $('#recurring').val('');
               $('#501c3').val('');
               $('#contact-name').val('');
               $('#contact-phone').val('');
               $('#contact-email').val('');
               $('#delivery-address').val('');
               $('#special-instructions').val('');
           })
           .catch(error => {
               console.error('Error!', error.message);
               alert('Oh no... something went wrong! Please try again later!')
           })
   })
});