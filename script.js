const createNotes = document.querySelector(".container button");
const notesList = document.querySelector(".notesList")

createNotes.addEventListener("click",()=>{
    console.log("clicked");
    const note = document.createElement("p");
    let img =document.createElement("img");
    img.src ="images/delete.png";
    note.setAttribute("contenteditable","true");
    notesList.appendChild(note).appendChild(img);
    updateNotes();
});

function updateNotes(){
    localStorage.setItem("notes",notesList.innerHTML)
}

notesList.addEventListener("click",(e)=>{  //Event Delegation ,this prevents from adding multiple listeners which would be added when we add listener to individual elements.
    if(e.target.tagName =="IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }
    else if(e.target.tagName == "P"){
        const notes = document.querySelectorAll("p");
        notes.forEach((nt)=>{
            nt.onkeyup = function(){
                updateNotes();
        }
    })
}
})

function loadStorage(){
    notesList.innerHTML = localStorage.getItem("notes");
}

loadStorage();
