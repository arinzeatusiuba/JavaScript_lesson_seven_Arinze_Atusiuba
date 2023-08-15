function removeColor() {
    let select = document.getElementById("colorSelect");
    let selectedOptionIndex = select.selectedIndex;

    if (selectedOptionIndex !== -1) {
        select.remove(selectedOptionIndex);
    }
}

document.getElementById("removeButton").addEventListener("click", removeColor);
