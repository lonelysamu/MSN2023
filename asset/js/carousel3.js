i = 0;
setInterval(function () {

    document.querySelectorAll(".midbox").forEach(removeall);
    console.log(i);
    document.querySelectorAll(".midbox")[i].classList.remove("d-none");
    i = i + 1;
    if (i == 2) {
        i = 0;
    }
}, 6000)

function removeall(item, index) {
    item.classList.add("d-none");
}