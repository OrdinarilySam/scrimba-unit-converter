const inputEl = document.querySelector("#input-el")
const convertBtn = document.querySelector("#convert-btn")

const lengthValues = document.querySelector("#length-values")
const volumeValues = document.querySelector("#volume-values")
const massValues = document.querySelector("#mass-values")

const meterToFeet = 3.280839895
const literToGallon = 0.2641720524
const kilogramToPound = 2.20462262185

const somethingElse = document.querySelector("#something-else")

convertBtn.addEventListener("click", function(){
    let num = inputEl.value
    lengthConvert(num)
    volumeConvert(num)
    massConvert(num)
})

function lengthConvert(num) {
    feet = (num*meterToFeet).toFixed(3)
    meters = (num*(1/meterToFeet)).toFixed(3)
    output = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
    lengthValues.textContent = output
}
function volumeConvert(num) {
    gallons = (num*literToGallon).toFixed(3)
    liters = (num*(1/literToGallon)).toFixed(3)
    output = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
    volumeValues.textContent = output
}
function massConvert(num) {
    pounds = (num*kilogramToPound).toFixed(3)
    kilograms = (num*(1/kilogramToPound)).toFixed(3)
    output = `${num} kilograms = ${pounds} pounds | ${num} pounds = ${kilograms}`
    massValues.textContent = output

}