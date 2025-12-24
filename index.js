/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

1 foot = 0.305 meter
1 gallon = 3.785 liters
1 pound = 0.454 kilogram
*/ 

// 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let convertBtn = document.getElementById("convert-btn")
let lenString = ""
let volString = ""
let massString = ""
let num1 = ""


convertBtn.addEventListener("click", function(){
    num1 = Number(inputEl.value)
    console.log(num1)
    lengthConvert()
    lengthEl.textContent = lenString
    volumeConvert()
    volumeEl.textContent = volString
    massConvert()
    massEl.textContent = massString
    lenString = ""
    volString = ""
    massString = ""

})

function lengthConvert() {
    let feet = (num1*3.281).toFixed(3) //meter to feet
    let meter = (num1*0.305).toFixed(3) // feet to meter
    lenString += `${num1} meters = ${feet} feet | ${num1} feet = ${meter} meters`
}

function volumeConvert() {
    let gallon = (num1*0.264).toFixed(3) // liter to gallon
    let liter = (num1*3.785).toFixed(3) // gallon to liter
    volString += `${num1} liters = ${gallon} gallons | ${num1} gallons = ${liter} liters`
}

function massConvert() { 
    let kilos = (num1*0.454).toFixed(3) // kilos to pounds
    let pounds = (num1*2.204).toFixed(3) // pounds to kilos
    massString += `${num1} kilos = ${pounds} pounds | ${num1} pounds = ${kilos} kilos`
}
