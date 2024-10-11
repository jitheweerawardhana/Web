function openForm() {
    document.getElementById("studentForm").style.display = "block";
}

function closeForm() {
    document.getElementById("studentForm").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("studentForm");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
