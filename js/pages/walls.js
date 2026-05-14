function walls(){
  const app = document.getElementById('app');

  const sidebar = wallsData.map(w =>
    `<button class="btnSidebar" onclick="openWall('${w.id}')">${w.title}</button>`
  ).join('');

  app.innerHTML = `
    <div class="layout">
      <div class="sidebar">${sidebar}</div>

      <div class="content" id="wall-content">
        <h2>Оберіть стіну</h2>

        <!-- важливо: контейнер для карток -->
        <div class="cards-wrap" id="cards-wrap"></div>
      </div>
    </div>
  `;
}
function openWall(id){
  const wall = wallsData.find(w => w.id === id);
  const wrap = document.getElementById('cards-wrap');

  if(!wall){
    wrap.innerHTML = '<p>NOT FOUND</p>';
    return;
  }
if(!wall.items.length){
  wrap.innerHTML += `<p>Тут поки немає експонатів</p>`;
}
  const items = wall.items.map(item =>
  `<div class="card" onclick="openModal('${item.title}', '${item.text}', '${item.img}')">
    
    <div class="card-img-wrap">
      <img src="${item.img}" class="card-img" alt="${item.title}">
    </div>

    <div class="card-title">${item.title}</div>

  </div>`
).join('');

wrap.innerHTML = `
  <h2 class="wall-title">${wall.title}</h2>

  <div class="cards-grid">
    ${items}
  </div>
`;

}
Router.register("walls", walls);