let toggle = document.getElementById("switchToggle");
let body = document.querySelector("body");

toggle.addEventListener("click", (e) => {

//   console.log(toggle.checked);
    if (toggle.checked){
        body.classList.add("dark-theme");
    }
    else{
        body.classList.remove("dark-theme");
    }
});
