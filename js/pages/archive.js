function archive(){
  const app = document.getElementById('app');

  const sidebar = archiveData.map(w =>
    `<button class="btnSidebar" onclick="openArchive('${w.id}')">${w.title}</button>`
  ).join('');

  app.innerHTML = `
    <div class="layout">
      <div class="sidebar">${sidebar}</div>

      <div class="content" id="archive-content">
        <h2>Оберіть архів</h2>

        <!-- важливо: контейнер для карток -->
        <div class="cards-wrap" id="cards-wrap"></div>
      </div>
    </div>
  `;
}

function openArchive(id){
  const archive = archiveData.find(w => w.id === id);
  const wrap = document.getElementById('cards-wrap');

  if(!archive){
    wrap.innerHTML = '<p>NOT FOUND</p>';
    return;
  }

  const items = archive.items.map(item =>
    `<div class="card" onclick="openModal('${item.title}', '${item.text}', '${item.img}')">
        <img src="${item.img}" class="card-img">
        <div class="card-title">${item.title}</div>
     </div>`
  ).join('');

  wrap.innerHTML = `
    <h2 class="archive-title">${archive.title}</h2>
    <div class="cards-grid">
      ${items}
    </div>
  `;
}
Router.register("archive", archive);