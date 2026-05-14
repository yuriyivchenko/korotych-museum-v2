function home(){
  const app = document.getElementById('app');

  const wallButtons = wallsData.map(w => `
    <button class="wall ${w.id}" onclick="openPlanSection('wall', '${w.id}')">
      ${w.title}
    </button>
  `).join('');

  const standButtons = standsData.map(s => `
    <div class="stand ${s.id}" onclick="openPlanSection('stand', '${s.id}')">
      <div class="stand-label">${s.title}</div>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="home-page">
      <div class="hero">
        <h1>🏛️ План музею</h1>
        <p>Оберіть стіну або стійку на плані кімнати, щоб побачити експонати.</p>
      </div>

        <div class="plan-map">
          <div class="hall">
          <button class="wall wall1" onclick="openPlanSection('wall', 'wall1')">
  Стіна 1
</button>
<button class="wall wall2" onclick="openPlanSection('wall', 'wall2')">
  Стіна 2
</button>
<button class="wall wall3" onclick="openPlanSection('wall', 'wall3')">
  Стіна 3
</button>
<button class="wall wall4" onclick="openPlanSection('wall', 'wall4')">
  Стіна 4
</button>
            
        <!-- СТІЙКИ -->

        <div class="stand stand1" onclick="openPlanSection('stand', 'stand1')">
          1
          <div class="stand-label">Стійка 1</div>
        </div>

        <div class="stand stand2" onclick="openPlanSection('stand', 'stand2')">
          2
          <div class="stand-label">Стійка 2</div>
        </div>

        <div class="stand stand3" onclick="openPlanSection('stand', 'stand3')">
          3
          <div class="stand-label">Стійка 3</div>
        </div>

        <div class="stand stand4" onclick="openPlanSection('stand', 'stand4')">
          4
          <div class="stand-label">Стійка 4</div>
        </div>        <!-- ВХІД -->

        <div class="door"></div>

        </div>
      </div>

      <div class="hint">
        💡 Порада: натисніть елемент на плані для відкриття експонатів.
      </div>

    
  `;
}

function openPlanSection(type, id){
  const data = type === 'wall' ? wallsData : standsData;
  const section = data.find(item => item.id === id);

  if(!section){
    return;
  }

  const cards = section.items.map(item => `
    <div class="card plan-card" onclick="openModal('${item.title}', '${item.text}', '${item.img}')">
      <div class="card-img-wrap">
        <img src="${item.img}" class="card-img" alt="${item.title}">
      </div>
      <div class="card-title">${item.title}</div>
      <div class="card-text">${item.text}</div>
    </div>
  `).join('');

  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="section-page">
      <div class="section-header">
        <button class="button back" onclick="Router.go('home')">← Повернутись до плану музею</button>
        <h2>${section.title} — Експонати</h2>
        <p>Оберіть експонат для детального перегляду.</p>
      </div>
      <div class="cards-grid">
        ${cards}
      </div>
      <div class="section-footer">
        <button class="button" onclick="Router.go('home')">Повернутись до плану музею</button>
      </div>
    </section>
  `;
}

// 🔥 реєстрація маршруту

Router.register("home", home);