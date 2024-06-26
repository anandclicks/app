const openEye = `<i class="ri-eye-off-fill fs-5 m-3"></i>`;
const closeEye = `<i class="ri-eye-fill fs-5 m-3"></i>`;

document.querySelector('.eye').addEventListener('click', function () {
  var passwordField = document.getElementById('password');
  var type = passwordField.type === 'password' ? 'text' : 'password';
  passwordField.type = type;
  
  // Toggle the eye icon
  this.innerHTML = type === 'password' ? openEye : closeEye;
});
