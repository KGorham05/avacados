$(document).ready(function () {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyPpJ_vPpL92ynCGJoil1SSpwRTkyq-rljoJplhX3Dh2D67MG8/exec";
  const form = document.forms["submit-to-google-sheet"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        alert("Success! In order to fulfill your order, we also require you to email a pdf/or jpg document showing your current 501(c)(3) status to our email at farmertofamilies@gmail.com");
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
           $('#org-name').val('');
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Oh no... something went wrong! Please try again later!");
      });
  });
});
