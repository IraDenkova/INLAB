$(function () {

  const menuIcon = document.querySelector('.menu-passive__btn');
  if (menuIcon){
    const menuBody = document.querySelector('.menu-active');
    menuIcon.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      menuIcon.classList.toggle('_active');
      menuBody.classList.toggle('_visible');
    })
  }
});


