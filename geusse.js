geusseButton.onclick = function () {

    let hasRings = ringsCheckbox.checked
    let hasJersey23 = jerseyCheckbox.checked
    let hasDpoy = dpoyCheckbox.checked
    let hasAssist = assistCheckbox.checked

    let isLebron = hasJersey23 && hasRings && hasAssist && hasDpoy
    let isMike = hasJersey23 && hasRings && !hasAssist && hasDpoy
    let isRay = !hasJersey23 && !hasRings && hasAssist && !hasDpoy
    let isJulius = !hasJersey23 && hasRings && !hasAssist && !hasDopy

    if (isLebron) {
        alert("Im am Lebron")
        vacaImg.src = "lebronjames.jpeg";
        geussBody.style.backgroundColor = "purple"
    } else if (isMike) {
        alert("i am Mike")
        vacaImg.src = "michaeljordan.jpeg";
        geussBody.style.backgroundColor = "red"
    } else if (isRay) {
        alert("I am Ray")
        vacaImg.src = "Rayallen.jpeg";
        geussBody.style.backgroundColor = "green"
    } else if (isJulius) {
        alert("I Am Julius")
        vacaImg.src = "DRJ.jpeg";
        geussBody.style.backgroundColor = "blue"
    } else {

        alert("unknown Person")
    }
}

let allBoxes = [
    ringsCheckbox,
    jerseyCheckbox,
    dpoyCheckbox,
    assistCheckbox
];

resetButton.onclick = function () {
    console.log("Legend");
    ringsCheckbox = false;
    jerseyCheckbox = false;
    dpoyCheckbox = false;
    assistCheckbox = false;
    let iam = [ringsCheckbox, jerseyCheckbox, dpoyCheckbox, assistCheckbox]
    for (let i = 0; i < 4; i++) {
        allBoxes[i].checked = false
    }
}