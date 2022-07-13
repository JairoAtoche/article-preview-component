let author = document.querySelector(".author-container");
let share = document.querySelector(".share-container");
let btn = document.getElementById("btnShare");
btn.addEventListener("click", ()=> {
    if (btn.classList.contains("author__btn--modifier")) {
        btn.classList.remove("author__btn--modifier");
        share.style.visibility = "hidden";
    } else {        
        btn.classList.add("author__btn--modifier");
        share.style.visibility = "visible";
    }
});

