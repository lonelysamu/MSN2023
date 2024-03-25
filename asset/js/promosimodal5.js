
let database = ["1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg","6.jpg"]
let linkdatabase = ["", "", "", "https://minggusainsnegara.com/asmegames/","https://forms.gle/TctpwEYbdQXkCmzg8","https://certificates.minggusainsnegara.com/"]

document.querySelector('#contentlist').addEventListener('click', (e) => {
    if (e.target.classList.contains("loadmodalbutton") == true) {
        y = Array.from(document.querySelector('#contentlist').getElementsByClassName("loadmodalbutton")).indexOf(e.target);
        console.log(y);
        document.getElementById("imageboxcontainer").src = "asset/fullposter/" + database[y];
        document.getElementById("downloadlink").href = "asset/fullposter/" + database[y];
        if (linkdatabase[y] == "") {
            document.getElementById("externalink").classList.add("d-none");
        }
        else {
            document.getElementById("externalink").classList.remove("d-none");
            document.getElementById("externalink").href = linkdatabase[y];
        }
    }
    else {
    }
})