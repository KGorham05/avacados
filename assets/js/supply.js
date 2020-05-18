$(document).ready(function () {
   const scriptURL =
     "https://script.google.com/macros/s/AKfycbxxNVJM3pHP-uQRJsXN7Tf3-Xo1-HzPwmsXL16CnRND2lUqnsfq/exec";
   const form = document.forms["submit-to-google-sheet"];
 
   form.addEventListener("submit", (e) => {
     if ($("#company-name").val().trim() === "") {
       alert("Please enter your company name");
       return;
     }
     e.preventDefault();
     fetch(scriptURL, { method: "POST", body: new FormData(form) })
       .then((response) => {
         console.log("Success!", response);
         alert("Success! Thank you for your offering! Someone will reach out to you soon.");
         // empty form fields
            $('#company-name').val('');
            $('#contact-name').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#produce-offering').val('');
            $('#full-load-pricing').val('');
            $('#pack-config').val('');
            $('#total-load-qty').val('');
            $('#cost-per-truck').val('');
            $('#cost-per-lb').val('');
            $('#num-loads-now').val('');
            $('#num-loads-next-week').val('');
            $('#date-of-offering').val('');
            $('#valid-through-date').val('');
            $('#opportuinty-produce').val('');
            $('#shelf-life').val('');
            $('#box-offering').val('');
       })
       .catch((error) => {
         console.error("Error!", error.message);
         alert("Oh no... something went wrong! Please try again later!");
       });
   });
 });
 
 