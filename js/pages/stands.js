function stands(){
  const app = document.getElementById('app');

  const sidebar = standsData.map(w =>
    `<button class="btnSidebar" onclick="openStand('${w.id}')">${w.title}</button>`
  ).join('');

  app.innerHTML = `
    <div class="layout">
      <div class="sidebar">${sidebar}</div>
      <div class="content" id="stand-content">
        <h2>Оберіть стійку</h2>
      </div>
    </div>
  `;
}

function openStand(id) {
  const stand = standsData.find(s => s.id === id);
  const content = document.getElementById('stand-content');

  if (!stand) {
    content.innerHTML = 'NOT FOUND';
    return;
  }

  const items = stand.items.map(item =>
    `<div class="card" onclick="openModal('${item.title}', '${item.text}', '${item.img}')">

    <div class="card-img-wrap">
      <img src="${item.img}" class="card-img" alt="${item.title}">
    </div>

    <div class="card-title">${item.title}</div>

  </div>`
  ).join('');

  content.innerHTML = `
  <h2 class="wall-title">${stand.title}</h2>

  <div class="cards-grid">
    ${items}
  </div>
`;
}
Router.register("stands", stands);