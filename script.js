const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const subject = this.subject.value.trim();
    const message = this.message.value.trim();
    const response = document.getElementById('formResponse');

    if (!name || !email.includes('@') || !subject || !message) {
      response.style.color = 'red';
      response.textContent = 'Please fill out all fields with valid information.';
      return;
    }

    response.style.color = 'green';
    response.textContent = 'Thank you for contacting us! We will get back to you shortly.';

    this.reset();
  });
}
