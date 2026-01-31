<script>
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    const firstname = document.getElementById("first-name");
    const lastname = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const company = document.getElementById("company");

    if (
      firstname.value.trim() === "" ||
      lastname.value.trim() === "" ||
      email.value.trim() === "" ||
      company.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      e.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
});
</script>
