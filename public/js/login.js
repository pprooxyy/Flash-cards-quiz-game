const { logForm } = document.forms;

const errH5 = document.querySelector('.error');
const mainBar = document.querySelector('.main');

logForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(logForm);

  try {
    const response = await fetch('/enter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(data)),
    });
    const result = await response.json();
    if (result.login) {
      const headeruser = `
      <div class="userLogout">
        <a class="btn">
          Hi, ${result.name}
        </a>
        <a class="btn" href='/users/logout'>Logout</a>
      </div>`;
      mainBar.insertAdjacentHTML('beforeend', headeruser);
      document.querySelector('.formReg').remove();
      errH5.style.visibility = 'hidden';
    } else {
      errH5.innerText = 'неверный логин или пароль';
      errH5.style.visibility = 'visible';
    }
  } catch (err) {
    console.log(err, 'not worked fetch');
  }
});
