/** @format */

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let langdef = parseInt(urlParams.get('lang'));

if (langdef == '2') {
  document.querySelectorAll('.BM').forEach(removealllang);
  document.querySelectorAll('.ENG').forEach(addalllang);
  document.querySelector('.buttonstyle2active').classList.remove('buttonstyle2active');
  document.querySelector('#engbutton').classList.add('buttonstyle2active');
}

document.querySelector('#langselector').addEventListener('click', (e) => {
  if (e.target.id == 'engbutton') {
    document.querySelectorAll('.BM').forEach(removealllang);
    document.querySelectorAll('.ENG').forEach(addalllang);
    document.querySelector('.buttonstyle2active').classList.remove('buttonstyle2active');
    e.target.classList.add('buttonstyle2active');
  } else if (e.target.id == 'bmbutton') {
    document.querySelectorAll('.ENG').forEach(removealllang);
    document.querySelectorAll('.BM').forEach(addalllang);
    document.querySelector('.buttonstyle2active').classList.remove('buttonstyle2active');
    e.target.classList.add('buttonstyle2active');
  }
});

function removealllang(item, index) {
  item.classList.add('d-none');
}

function addalllang(item, index) {
  item.classList.remove('d-none');
}
