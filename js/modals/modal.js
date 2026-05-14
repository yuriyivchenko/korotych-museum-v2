function openModal(title, text, img){
  document.getElementById('modal').style.display = 'block';

  document.getElementById('modal-body').innerHTML = `
    <h2>${title}</h2>
    <img src="${img}" class="modal-img">
    <p>${text}</p>
  `;
}

function openModalHtml(title, html){
  document.getElementById('modal').style.display = 'block';

  document.getElementById('modal-body').innerHTML = `
    <h2>${title}</h2>
    ${html}
  `;
}

function closeModal(){
  document.getElementById('modal').style.display='none';
}