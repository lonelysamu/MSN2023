/** @format */

let keybooth = 2;
let nobooth = exhibitordb.length;
let loadedbooth = [];
let randomnum = 0;
/* Load Premium Booth */

for (let i = 0; i < nobooth; i++) {
  if (exhibitordb[i][1] == keybooth) {
    randrop = Math.floor(Math.random() * 4 + 1);
    document.querySelector('#premiumspot').innerHTML += "<div class='col-4 col-sm-4 col-lg-3 col-xl-2 p-1 anchor hideori fadefromtop" + randrop + "'><div class='anchortotop p-2 topcard text-center d-flex align-items-center justify-content-center'><div class=''><a href='booth.php?lang=2&bi=" + i + "' class='ENG d-none'><button class=' p-2 pe-2 ps-2 pe-md-4 ps-md-4 buttonstyle1 '>Learn More</button></a><a href='booth.php?bi=" + i + "' class='BM'><button class=' p-2 pe-2 ps-2 pe-md-4 ps-md-4 buttonstyle1 '>Lebih Lanjut</button></a> </div></div><img src='asset/boothcontent/" + i + "/logo.jpg' class='standardimg ' alt=''></div>";
    loadedbooth.push(exhibitordb[i][0]);
  }
}

let boothleft = nobooth - loadedbooth.length;

for (let x = 0; x < boothleft; x++) {
  do {
    randomnum = Math.floor(Math.random() * nobooth + 0);
    console.log(randomnum);
  } while (loadedbooth.includes(randomnum) == true);
  randrop = Math.floor(Math.random() * 4 + 1);
  document.querySelector('#everyoneelse').innerHTML += "<div class='col-4 col-sm-4 col-lg-3 col-xl-2 p-1 anchor hideori fadefromtop" + randrop + "'><div class='anchortotop p-2 topcard text-center d-flex align-items-center justify-content-center'><div class=''><a href='booth.php?lang=2&bi=" + randomnum + "' class='ENG d-none'><button class=' p-2 pe-2 ps-2 pe-md-4 ps-md-4 buttonstyle1 '>Learn More</button></a><a href='booth.php?bi=" + randomnum + "' class='BM'><button class=' p-2 pe-2 ps-2 pe-md-4 ps-md-4 buttonstyle1 '>Lebih Lanjut</button></a> </div></div><img src='asset/boothcontent/" + randomnum + "/logo.jpg' class='standardimg ' alt=''></div>";
  loadedbooth.push(randomnum);
  console.log('current i:' + x);
}
