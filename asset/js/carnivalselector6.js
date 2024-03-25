let carnivaldatabase = [
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', "NEGERI SEMBILAN"], ['h5', "26 & 27 Mei 2023"], ['p', "Universiti Sains Islam Malaysia"], ['img', 'asset/carnivalposter/ns1.jpg', "main poster for negeri sembilan"], ['img', 'asset/carnivalposter/ns2.jpg', "schedule day 1"], ['img', 'asset/carnivalposter/ns3.jpg', "schedule day 2"], ['img', 'asset/carnivalposter/ns4.jpg', "map to location"]],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'SABAH',], ['h5', "24 & 26 Aug 2023"], ['h5', "29 & 30 Sep 2023"], ['img', 'asset/carnivalposter/sab1.jpg', "main poster for sabah"],['img', 'asset/carnivalposter/sab2.jpg', "main poster for sabah"],['img', 'asset/carnivalposter/sab3.jpg', "main poster for sabah"],['img', 'asset/carnivalposter/sab4.jpg', "main poster for sabah"],],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'PERAK',], ['h5', "23 & 24 Jun 2023"], ['p', 'coming soon']],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'KEDAH'], ['h5', "15 & 16 Jul 2023"], ['p', "Dewan CRC, Kulim, Kedah"], ['img', 'asset/carnivalposter/k1.jpg', "main poster for kedah"], ['img', 'asset/carnivalposter/k2.jpg', "schedule day 1"], ['img', 'asset/carnivalposter/k2.jpg', "schedule day 2"]],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'JOHOR',], ['h5', "19 & 20 Aug 2023"], ['img', 'asset/carnivalposter/johor1.jpeg', "main poster for johor"], ['img', 'asset/carnivalposter/johor2.jpeg', "main poster for johor"], ],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'TERENGGANU',], ['h5', "30 Sep & 2 Oct 2023"], ['p', 'coming soon']],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'PULAU PINANG',], ['h5', "16 & 17 Aug 2023"],['h5', "25 & 26 Aug 2023"], ['img', 'asset/carnivalposter/pg1.jpg', "main poster for penang"],['img', 'asset/carnivalposter/pg2.jpg', "main poster for penang"],['img', 'asset/carnivalposter/penang3.jpeg', "main poster for penang"]],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'SELANGOR / KL',], ['h5', "6 & 7 Sep 2023"], ['img', 'asset/carnivalposter/sel1.jpg', "main poster for selangor"],['img', 'asset/carnivalposter/sel2.jpg', "main poster for selangor"],['img', 'asset/carnivalposter/sel3.jpg', "main poster for selangor"],['img', 'asset/carnivalposter/sel4.jpg', "main poster for selangor"]],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'MELAKA',], ['h5', "12 & 14 Oct 2023"], ['p', 'coming soon']],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'PERLIS',], ['h5', "25 & 26 Oct 2023"], ['p', 'coming soon']],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'SARAWAK',], ['h5', "20 & 21 Sep 2023"], ['p', 'coming soon']],
    [['h4', 'KARNIVAL MSN 2023 PERINGKAT'], ['h1', 'W.P PUTRAJAYA',], ['h5', "19 & 20 Nov 2023"], ['p', 'coming soon']]
]

let carnivalkeystone = ["h5", 'h4', 'h1', 'p', 'img', 'yt', 'fb'];
let currentlyactive = 7;
for (i = 0; i < carnivaldatabase[currentlyactive].length; i++) {
    console.log(carnivaldatabase[currentlyactive][i][0]);
    if (carnivaldatabase[currentlyactive][i][0] == 'h5') {
        document.getElementById("contentbox").innerHTML += "<h5 class='p-0 m-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[currentlyactive][i][1] + "</h5>"
    }
    else if (carnivaldatabase[currentlyactive][i][0] == 'h4') {
        document.getElementById("contentbox").innerHTML += "<h4 class='p-0 m-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[currentlyactive][i][1] + "</h4>"
    }
    else if (carnivaldatabase[currentlyactive][i][0] == 'h1') {
        document.getElementById("contentbox").innerHTML += "<h1 class='xltext m-0 p-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[currentlyactive][i][1] + "</h1>"
    }
    else if (carnivaldatabase[currentlyactive][i][0] == 'p') {
        document.getElementById("contentbox").innerHTML += "<p class='hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[currentlyactive][i][1] + "</p>"
    }
    else if (carnivaldatabase[currentlyactive][i][0] == 'img') {
        document.getElementById("contentbox").innerHTML += " <img src='" + carnivaldatabase[currentlyactive][i][1] + "' class='standardimg mt-1 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "' alt='" + carnivaldatabase[currentlyactive][i][2] + "'>"
    }
}

document.querySelector('#contentselector').addEventListener('click', (e) => {
    if ((e.target.classList.contains('stateselector') == true) && (e.target.classList.contains('buttonstyle1active') == false)) {
        selectedkey = Array.from(document.querySelector('#contentselector').getElementsByClassName('stateselector')).indexOf(e.target);
        document.querySelector("#contentbox").innerHTML = "";
        document.querySelector('.buttonstyle1active').classList.remove("buttonstyle1active");
        document.querySelectorAll('.stateselector')[selectedkey].classList.add("buttonstyle1active");

        for (i = 0; i < carnivaldatabase[selectedkey].length; i++) {
            console.log(carnivaldatabase[selectedkey][i][0]);
            if (carnivaldatabase[selectedkey][i][0] == 'h5') {
                document.getElementById("contentbox").innerHTML += "<h5 class='p-0 m-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[selectedkey][i][1] + "</h5>"
            }
            else if (carnivaldatabase[selectedkey][i][0] == 'h4') {
                document.getElementById("contentbox").innerHTML += "<h4 class='p-0 m-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[selectedkey][i][1] + "</h4>"
            }
            else if (carnivaldatabase[selectedkey][i][0] == 'h1') {
                document.getElementById("contentbox").innerHTML += "<h1 class='xltext m-0 p-0 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[selectedkey][i][1] + "</h1>"
            }
            else if (carnivaldatabase[selectedkey][i][0] == 'p') {
                document.getElementById("contentbox").innerHTML += "<p class='hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "'>" + carnivaldatabase[selectedkey][i][1] + "</p>"
            }
            else if (carnivaldatabase[selectedkey][i][0] == 'img') {
                document.getElementById("contentbox").innerHTML += " <img src='" + carnivaldatabase[selectedkey][i][1] + "' class='standardimg mt-1 hideori fadefromleft" + (Math.floor(Math.random() * 4) + 1) + "' alt='" + carnivaldatabase[selectedkey][i][2] + "'>"
            }
        }
    }
})