document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const resultDiv = document.getElementById("submittedData");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("messageContent").value.trim();

    if (name && email && phone && message) {
      resultDiv.innerHTML = `
        <h3>Your Submitted Data:</h3>
        <p><strong>Name :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Phone :</strong> ${phone}</p>
        <p><strong>Message :</strong> ${message}</p>
      `;
      form.reset();
    } else {
      alert("Please fill in all the fields.");
    }
  });
});
