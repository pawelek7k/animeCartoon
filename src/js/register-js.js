const registerContainer = document.querySelector('#register-main-container');
const loginContainer = document.querySelector('#login-main-container');
const linkSingUp = document.querySelector('.link-singup');

registerContainer.classList.add('hidden');
loginContainer.classList.add('hidden');

linkSingUp.addEventListener('click', e => {
  //   e.preventDefault();
  loginContainer.classList.remove('hidden');
});
