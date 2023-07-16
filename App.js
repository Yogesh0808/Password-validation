function togglePasswordVisibility() {
    const passwordInput = document.getElementById('pwdInput');
    const eyeIcon = document.getElementById('togglePassword').querySelector('i');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    }
  }

//Password Validation
const passwordInput = document.getElementById('pwdInput');
const passwordChecklist = document.querySelectorAll('.fa-circle');

const validationRegex = [
  { regex: /.{8,}/ },           // min 8 Characters
  { regex: /[A-Z]/ },           // Uppercase letter
  { regex: /[a-z]/ },           // Lowercase letter
  { regex: /[0-9]/ },           // Number
  { regex: /[^A-Za-z0-9]/ }     // Special character
];

function validatePassword() {
  const password = passwordInput.value;

  validationRegex.forEach((item, i) => {
    const isValid = item.regex.test(password);
    if (isValid) {
      passwordChecklist[i].classList.remove('fa-circle');
      passwordChecklist[i].classList.add('fa-circle-check');
    } else {
      passwordChecklist[i].classList.remove('fa-check');
      passwordChecklist[i].classList.add('fa-circle');
    }
  });
}

passwordInput.addEventListener('keyup', validatePassword);