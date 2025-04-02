let bill = 0
let tip = 0
let numberOfPeople = 0

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPercentageValue(value) {
    tipPercentage = value/100

    if(document.querySelector("#custom-tip").value !== "") {
        document.querySelector("#custom-tip").value = ""
    }

    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
    }

    

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber/100

}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}