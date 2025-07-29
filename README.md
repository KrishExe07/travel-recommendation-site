# travel-recommendation-site
HOME PAGE 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Travel Explorer - Home</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <nav class="navbar">
      <a href="home.html">Home</a>
      <a href="contactus.html" class="active">About Us</a>
      <a href="aboutus.html">Contact Us</a>
    </nav>
  </header>

  <main>
    <section class="intro">
      <h1>Welcome to Travel Explorer</h1>
      <p>Discover the best travel destinations tailored to your preferences. From sunny beaches to spiritual temples and country-based picks, we help you plan your perfect trip.</p>
    </section>

    <section class="recommendation">
      <h2>🌴 Top Beach Destinations</h2>
      <div class="gallery">
        <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/08/16/Pictures/_dbca9ffa-a138-11e8-9345-8d51f8ed9678.jpg" alt="Goa Beach" />
        <img src="https://media.timeout.com/images/105984009/750/562/image.jpg" alt="Maldives" />
      </div>
    </section>

    <section class="recommendation">
      <h2>🛕 Must-See Temples</h2>
      <div class="gallery">
        <img src="https://mainawara.com/wp-content/uploads/2024/08/Tamilnadu-Banner.jpg" alt="Meenakshi Temple" />
        <img src="https://static.toiimg.com/photo/107052733.cms" alt="Angkor Wat" />
      </div>
    </section>

    <section class="recommendation">
      <h2>🌍 Discover by Country</h2>
      <div class="gallery">
        <img src="https://www.pelago.com/img/countries/japan/1201-0821_japan-book-things-to-do-pelago.jpg" alt="Japan - Mt. Fuji" />
        <img src="https://assets.vogue.com/photos/65f04d926294babad5413eb1/16:9/w_5760,h_3240,c_limit/GettyImages-1380534040.jpg" alt="Italy - Venice" />
      </div>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
ABOUT PAGE 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Travel Explorer - About Us</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <nav class="navbar">
      <a href="home.html">Home</a>
      <a href="contactus.html" class="active">About Us</a>
      <a href="aboutus.html">Contact Us</a>
    </nav>
  </header>

  <main>
    <section class="about-us">
      <h1>About Travel Explorer</h1>
      <p>
        Travel Explorer is dedicated to helping you discover amazing destinations worldwide tailored to your travel preferences.
        Our mission is to inspire and assist you in planning memorable trips filled with beautiful beaches, majestic temples, and cultural wonders.
      </p>
      <p>
        Our team is passionate about travel and technology, creating an easy-to-use platform where you can explore personalized recommendations with rich multimedia content.
      </p>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
CONTACT PAGE
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Contact Us - Travel Website</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="container">
    <h2>Contact Us</h2>

    <form id="contactForm" action="#" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

      <label for="subject">Subject:</label>
      <input type="text" id="subject" name="subject" placeholder="Subject" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </div>

  <script src="script.js"></script>
</body>
</html>
CSS CODE 
/* style.css */

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f5f9ff;
  color: #333;
}

header {
  background-color: #005f73;
  padding: 1rem 2rem;
}

.navbar {
  display: flex;
  gap: 2rem;
}

.navbar a {
  color: #e0fbfc;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}

.navbar a:hover,
.navbar a.active {
  background-color: #0a9396;
  color: #ffffff;
}

main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.intro, .about-us, .contact-us {
  background: #e0fbfc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

h1, h2 {
  color: #005f73;
}

.gallery {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.gallery img {
  width: 45%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  object-fit: cover;
  height: 200px;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

input[type="email"],
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #0a9396;
  border-radius: 5px;
  resize: vertical;
}

button {
  margin-top: 1rem;
  background-color: #005f73;
  color: white;
  border: none;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0a9396;
}

#formResponse {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}
JAVA SCRIPT CODE
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

