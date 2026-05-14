function contact(){
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="contact-page">

      <h1>Контакти</h1>

      <p>Зв’яжіться з нами або залиште повідомлення:</p>

      <form id="contact-form" class="contact-form">
        <input type="text" id="name" placeholder="Ваше ім’я" required>
        <input type="email" id="email" placeholder="Email" required>
        <textarea id="message" placeholder="Ваше повідомлення" required></textarea>

        <button type="submit">Надіслати</button>
      </form>

      <div id="contact-result" class="contact-result"></div>

      <div class="contact-info">
        <h2>Інформація</h2>
        <p>📍 Віртуальний музей</p>
        <p>📧 museum@example.com</p>
      </div>

    </div>
  `;

  initContactForm();
}

// 🔥 логіка форми
function initContactForm(){
  const form = document.getElementById('contact-form');
  const result = document.getElementById('contact-result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // збереження локально (імітація відправки)
    const feedbacks = JSON.parse(localStorage.getItem('messages') || '[]');

    feedbacks.push({
      name,
      email,
      message,
      date: new Date().toLocaleString()
    });

    localStorage.setItem('messages', JSON.stringify(feedbacks));

    result.innerHTML = `<p class="success">Повідомлення збережено ✔</p>`;

    form.reset();
  });
}

// 🔥 реєстрація маршруту
Router.register("contact", contact);




