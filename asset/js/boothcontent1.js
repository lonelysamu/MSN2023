/** @format */

const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2);
let boothnumber = parseInt(urlParams2.get('bi'));

/* Logo */
document.querySelector('#boothlogo').src = 'asset/boothcontent/' + boothnumber + '/logo.png';

/* Name */
document.querySelector('#namebm').innerHTML = exhibitordb[boothnumber][2];
document.querySelector('#nameeng').innerHTML = exhibitordb[boothnumber][2];

/* Title */
document.querySelector('#titlebm').innerHTML = exhibitordb[boothnumber][3][0];
document.querySelector('#titleeng').innerHTML = exhibitordb[boothnumber][3][1];

/* Description */
document.querySelector('#desbm').innerHTML = exhibitordb[boothnumber][4][0];
document.querySelector('#deseng').innerHTML = exhibitordb[boothnumber][4][1];

/* socialicon */
for (i = 0; i < exhibitordb[boothnumber][7].length; i++) {
  if (exhibitordb[boothnumber][7][i] != '') {
    document.querySelector('#socialiconbox').innerHTML += "<a href='" + exhibitordb[boothnumber][7][i] + "' class='nostyle p-0 m-0 ' target='blank'><button class='nostyle p-0 m-0 clickable'><img src='" + socialicon[i] + "' class='iconimg p-1' alt=''></button></a>";
  }
}

/* Poster */
document.querySelector('#postertitle').innerHTML = 'Poster (' + exhibitordb[boothnumber][5].length + ')';
for (i = 0; i < exhibitordb[boothnumber][5].length; i++) {
  document.querySelector('#postercontent').innerHTML += "<div class='col-12 col-lg-6 p-1'><img src='asset/boothcontent/" + boothnumber + '/poster/' + exhibitordb[boothnumber][5][i] + "' class='standardimg boxshadow'></div>";
}

/* Video */
document.querySelector('#videotitle').innerHTML = 'Video (' + exhibitordb[boothnumber][6].length + ')';
for (i = 0; i < exhibitordb[boothnumber][6].length; i++) {
  document.querySelector('#videocontent').innerHTML += "<div class='col-12 col-lg-5 p-0 m-2'><iframe width='100%' height='315' class='boxshadow'src='https://www.youtube.com/embed/" + exhibitordb[boothnumber][6][i] + "'title='YouTube video player' frameborder='0'allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'allowfullscreen></iframe></div>";
}
