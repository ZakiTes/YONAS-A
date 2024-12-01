// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });



  // Validate the contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
  
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
  
    // Mock form submission
    alert('Form submitted successfully!');
    form.reset();
    form.classList.remove('was-validated');
  });
  
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bootstrapNavbar = bootstrap.Collapse.getInstance(navbar);
        if (bootstrapNavbar) {
            bootstrapNavbar.hide(); // Collapse the navbar
        }
    });
});