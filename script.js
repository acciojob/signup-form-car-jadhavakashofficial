const form = document.getElementById('signupForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
  // Basic front-end validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const cars = document.getElementById('cars').value;
  const age = document.getElementById('age').value;
  const dob = document.getElementById('dob').value;
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const tosChecked = document.getElementById('tos').checked;

  if (!name || !email || !gender || !cars || !age || !dob || !phone || !password) {
    e.preventDefault();
    alert('Please fill out all required fields.');
    return;
  }

  if (!tosChecked) {
    e.preventDefault();
    alert('You must agree to the TOS.');
    return;
  }

  // Optional: Additional custom validations can go here

  // If all checks pass, the form will submit with method="post"
  alert('Form submitted successfully!');
});
