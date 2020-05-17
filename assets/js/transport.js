
$(document).ready(function () {
   const scriptURL =
     "https://script.google.com/macros/s/AKfycbwntn6uTDYguaR468JMnPvwFBB475sOOyWz4Sr_KnJGTeWCHbg/exec";
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
            $('#address').val('');
            $('#website').val('');
            $('#equipment').val('');
            $('#region').val('');
            $('#cold-storage').val('');
            $('#cold-storage-capacity').val('');
            $('#temp-control').val('');
            $('#certifications').val('');
       })
       .catch((error) => {
         console.error("Error!", error.message);
         alert("Oh no... something went wrong! Please try again later!");
       });
   });
 });
 
 