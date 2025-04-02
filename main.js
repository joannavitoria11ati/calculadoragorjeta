let bill = 0
let tip = 0
let numberOfPeople = 0

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber

    calculateResults()
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
    calculateResults()
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

    removeClassButtonSelected()
    calculateResults()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let strongAmount = document.querySelector(".amount strong")
        let tipAmountPerson = bill * tipPercentage / numberOfPeople
        strongAmount.innerText = `$${tipAmountPerson.toFixed(2)}`

        let strongTotal = document.querySelector(".total strong")
        let totalPerson = (bill / numberOfPeople) + tipAmountPerson
        strongTotal.innerText = `$${totalPerson.toFixed(2)}`
    }
}

function reset() {
    document.querySelector("#bill").value = ""
    bill = 0

    document.querySelector("#people").value = ""
    numberOfPeople = 0

    document.querySelector("#custom-tip").value = ""
    removeClassButtonSelected()
    tipPercentage = 0

    document.querySelector(".amount strong").innerText = "$0.00"
    document.querySelector(".total strong").innerText = "$0.00"
}
