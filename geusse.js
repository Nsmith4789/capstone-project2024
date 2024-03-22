guessButton.onclick = function () {

    let hasRings = ringsCheckbox.checked
    let hasJersey23 = jerseyCheckbox.checked
    let hasDpoy = dpoyCheckbox.checked
    let hasAssist = assistCheckbox.checked

    let isLebron = hasJersey23 && hasRings && hasAssist && hasDpoy
    let isMike = hasJersey23 && hasRings && !hasAssist && hasDpoy
    let isRay = !hasJersey23 && !hasRings && hasAssist && !hasDpoy
    let isJulius = !hasJersey23 && hasRings && !hasAssist && !hasDpoy

    if (isLebron) {
        alert("Im am Lebron")
        vacaImg.src = "lebronjames.jpeg";
        guessBody.style.backgroundColor = "purple"
    } else if (isMike) {
        alert("i am Mike")
        vacaImg.src = "michaeljordan.jpeg";
        guessBody.style.backgroundColor = "red"
    } else if (isRay) {
        alert("I am Ray")
        vacaImg.src = "Rayallen.jpeg";
        guessBody.style.backgroundColor = "green"
    } else if (isJulius) {
        alert("I Am Julius")
        vacaImg.src = "DRJ.jpeg";
        guessBody.style.backgroundColor = "blue"
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
    let all = allBoxes
    for (let i = 0; i < 4; i++) {
        all[i].checked = false
        //guessBody.style.backgroundColor = ""
        guessBody.style.backgroundImage = "url('passThetorch.jpg')"

    }
    alert("Your Are Right")
}
