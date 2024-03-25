document.querySelector('body').addEventListener('click', (e) => {

    if (e.target.classList.contains("navbaractivator") == true) {
        console.log("case1")
        if(document.querySelector("#navbaroverlay").classList.contains("d-none")==true){
            document.querySelector("#navbaroverlay").classList.remove("d-none");
        }
        else{
            document.querySelector("#navbaroverlay").classList.add("d-none");
        }

    }else if( e.target.classList.contains("closenavbar")==true){
        document.querySelector("#navbaroverlay").classList.add("d-none");
    }
    else{
        console.log("wud")
    }
})