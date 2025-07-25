const elements = {
  form: document.querySelector('.form'),
  username: document.querySelector('.username-input'),
  password: document.querySelector('.password-input'),
  alert: document.querySelector('.form-alert'),
  result: document.querySelector('.result'),
  fetchBtn: document.querySelector('#data'),
  tokenStatus: document.querySelector('.token'),
};

const showAlert = (message, success = false) => {
  elements.alert.textContent = message;
  elements.alert.style.display = 'block';
  elements.alert.classList.toggle('text-success', success);

  setTimeout(() => {
    elements.alert.style.display = 'none';
  }, 2000);
};

const updateTokenStatus = (hasToken) => {
  elements.tokenStatus.textContent = hasToken ? 'token present' : 'no token present';
  elements.tokenStatus.classList.toggle('text-success', hasToken);
};

const clearInputs = () => {
  elements.username.value = '';
  elements.password.value = '';
};

const storeToken = (token) => {
  localStorage.setItem('token', token);
  updateTokenStatus(true);
};

const removeToken = () => {
  localStorage.removeItem('token');
  updateTokenStatus(false);
};

const handleLogin = async (e) => {
  e.preventDefault();
  updateTokenStatus(false);

  const username = elements.username.value;
  const password = elements.password.value;

  try {
    const { data } = await axios.post('/api/v1/login', { username, password });
    showAlert(data.msg, true);
    clearInputs();
    storeToken(data.token);
    elements.result.innerHTML = '';
  } catch (error) {
    showAlert(error.response?.data?.msg || 'Login failed');
    removeToken();
    elements.result.innerHTML = '';
  }
};

const handleFetchData = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const { data } = await axios.get('/api/v1/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    elements.result.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`;
  } catch (error) {
    removeToken();
    elements.result.innerHTML = `<p>${error.response?.data?.msg || 'Access denied'}</p>`;
  }
};

const init = () => {
  updateTokenStatus(!!localStorage.getItem('token'));
  elements.form.addEventListener('submit', handleLogin);
  elements.fetchBtn.addEventListener('click', handleFetchData);
};

init();