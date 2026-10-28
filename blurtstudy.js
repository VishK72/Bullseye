let Blurt;

let notesBlurt;

document.getElementById("BlurtSubmit").onclick = function(){
    Blurt = document.getElementById("Blurt").value;
    document.getElementById("original").textContent = `Original: ${Blurt}`
}

document.getElementById("BlurtSubmit2").onclick = function(){
    notesBlurt = document.getElementById("blurtFinished").value;
    document.getElementById("repeated").textContent = `Repeated: ${notesBlurt}`
}


