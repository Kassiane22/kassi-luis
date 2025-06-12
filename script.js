// Navegação entre seções
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('.nav-btns button').forEach(btn => btn.classList.remove('active'));
    if(sectionId === 'passeios') {
      document.querySelectorAll('.nav-btns button')[0].classList.add('active');
    } else {
      document.querySelectorAll('.nav-btns button')[1].classList.add('active');
    }
  }
  
  // Modal de imagem
  function openModal(imgElement) {
    document.getElementById('modal-img').src = imgElement.src;
    document.getElementById('modal-caption').textContent = imgElement.getAttribute('data-caption') || '';
    document.getElementById('modal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(event) {
    if (event.target === document.getElementById('modal') || event.target.classList.contains('close-btn')) {
      document.getElementById('modal').classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  // Fecha modal com ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") closeModal({target: document.getElementById('modal')});
  });
  