function feedback(){
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="feedback-layout" id="feedback-content">
      <h2>Відгуки</h2>
    </div>
  `;

  const content = document.getElementById('feedback-content');

  const html = feedbackData.map(group => `
    <div class="feedback-group">
      <h3>${group.title}</h3>

      <div class="feedback-items">
        ${group.items.map(item => `
          <div class="feedback-card">
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  content.innerHTML += html;
}
Router.register("feedback", feedback);