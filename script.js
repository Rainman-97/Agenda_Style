const modal = document.querySelector('#modal');
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const form = document.querySelector('#appointment-form');

openModal.addEventListener('click', () => {
  modal.hidden = false;
  document.querySelector('.modal input').focus();
});

function hideModal() { modal.hidden = true; }
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hideModal(); });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  button.textContent = '✓ Cita guardada';
  button.style.background = '#263f6b';
  setTimeout(() => { hideModal(); button.innerHTML = 'Guardar cita'; button.style.background = ''; form.reset(); }, 900);
});

document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'));
  item.classList.add('active');
}));
