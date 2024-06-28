const btnSi = document.getElementById('btn-si');
const btnNo = document.getElementById('btn-no');

let scaleFactor = 1;

btnSi.addEventListener('click', () => {
  alert('¡SABÍA QUE ME PERDONARÍAS <3!');
});

btnNo.addEventListener('click', () => {
  if (scaleFactor <= 3) {
    btnSi.style.transform = `scale(${scaleFactor})`;
    scaleFactor += 0.5;
  } else {
    btnNo.style.display = 'none';
  }
});
