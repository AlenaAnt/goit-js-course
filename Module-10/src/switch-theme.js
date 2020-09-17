const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.addEventListener('DOMContentLoaded', () => {
  const switchInputRef = document.querySelector('input.js-switch-input');
  const bodyRef = document.querySelector('body');
  const load = () => {
    const loadTheme = localStorage.getItem('saveTheme');
    if (loadTheme === null) {
      localStorage.setItem('saveTheme', Theme.LIGHT);
    } else if (loadTheme === Theme.DARK) {
      switchInputRef.checked = true;
    }
    bodyRef.classList.add(localStorage.getItem('saveTheme'));
  };
  load();
  const changeTheme = () => {
    if (switchInputRef.checked) {
      bodyRef.classList.remove(Theme.LIGHT);
      bodyRef.classList.add(Theme.DARK);
      localStorage.setItem('saveTheme', Theme.DARK);
    } else {
      bodyRef.classList.remove(Theme.DARK);
      bodyRef.classList.add(Theme.LIGHT);
      localStorage.setItem('saveTheme', Theme.LIGHT);
    }
  };
  switchInputRef.addEventListener('change', changeTheme);
});
