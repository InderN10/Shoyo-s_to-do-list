const button = document.getElementsByClassName(".button");





function cancel() {
    document.getElementById("taskCONTAINER").style.display = "none";
}

function drawTASK() {
    let x = document.getElementById("taskCONTAINER");
    if (x.style.display == "none" || x.style.display == "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};

function drawedTASK() {

    cancel();
};
function editTASK() {

};
function deleteTASK() {

};

document.querySelector("#addTASKbutton").addEventListener("click", function () {
    const title = document.querySelector("TitleNAME").value;
    const Description = document.querySelector("Description").value;

    if (title && Description) {
        const createdTASK = document.createElement("div");
        createdTASK.classList.add("task-card");

        createdTASK.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Description</strong>${Description} </p>
        `;
     
    }
})