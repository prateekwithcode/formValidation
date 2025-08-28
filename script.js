// Form Validation with jQuery
$(document).ready(function () {
  // Toggle password visibility
  $("#togglePassword").click(function () {
    const passwordField = $("#password");
    const type = passwordField.attr("type") === "password" ? "text" : "password";
    passwordField.attr("type", type);
    $(this).text(type === "password" ? "Show" : "Hide");
  });

  // Form submit validation
  $("#registrationForm").submit(function (event) {
    event.preventDefault(); // Prevent page reload

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let phone = $("#phone").val().trim();
    let password = $("#password").val().trim();
    let messageBox = $("#message");

    // Regular Expressions
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]{10}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    // Validation checks
    if (name === "" || email === "" || phone === "" || password === "") {
      showMessage("All fields are required!", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email (e.g., user@example.com)", "error");
      return;
    }

    if (!phoneRegex.test(phone)) {
      showMessage("Phone number must be exactly 10 digits", "error");
      return;
    }

    if (!passwordRegex.test(password)) {
      showMessage("Password must have at least 6 characters, one uppercase, one lowercase, and one number", "error");
      return;
    }

    // If all validations pass
    showMessage("Registration Successful ✅", "success");
    $("#registrationForm")[0].reset(); // Clear form
  });

  // Function to display messages
  function showMessage(message, type) {
    let messageBox = $("#message");
    messageBox.removeClass("error success").addClass(type).text(message).fadeIn();
    setTimeout(() => messageBox.fadeOut(), 4000);
  }
});
