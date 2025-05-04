// Get form and feedback elements
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');
// Add event listener to form submit
form.addEventListener('submit', function(event) {
  // Prevent form from submitting
  event.preventDefault();
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // Simple validation
  if (name === "" || email === "" || message === "") {
    feedback.textContent = "All fields must be filled out.";
    feedback.style.color = "red";
    feedback.style.display = "block";
  } else {
    feedback.textContent = "Thank you for your message!";
    feedback.style.color = "green";
    feedback.style.display = "block";
    // You can now proceed to send the form data to the server or use AJAX to submit.
  }
});
// Get all anchor links in the navigation
const links = document.querySelectorAll('nav a');
// Add click event to each link
links.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent the default behavior (jumping)
    e.preventDefault();
    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1);
    // Scroll to the target section
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});
