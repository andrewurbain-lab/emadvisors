const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('[data-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const dialog = document.getElementById(button.dataset.modal);

    if (!(dialog instanceof HTMLDialogElement)) return;

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
  });
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
