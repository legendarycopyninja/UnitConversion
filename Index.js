const inputEl = document.getElementById("inputel")
const convert = document.getElementById("buttonel")
const length = document.getElementById("length")
const volume = document.getElementById("Volume")
const mass = document.getElementById("Mass")


convert.addEventListener("click", function(){
data = inputEl.value
feet()
gallons()
pound()

})

const feet = () => {
    let feet = Number(data)* 3.281
    let meters = Number(data) * 0.3048
    result=`${data} meters = ${feet.toFixed(3)} feet | ${data} feet = ${meters.toFixed(3)} meters`
    return length.innerHTML = result
}

const gallons = () => {
    let litres = Number(data)* 0.264
    let gallons = Number(data) * 3.78541
    output=`${data} litres = ${litres.toFixed(3)} gallons | ${data} gallons = ${gallons.toFixed(3)} litres`
    return volume.innerHTML = output
}

const pound = () => {
    let pound = Number(data)* 2.204
    let kilos = Number(data) * 0.453592
    result=`${data} kilos = ${pound.toFixed(3)} pound | ${data} pound = ${kilos.toFixed(3)} kilos`
    return mass.innerHTML = result
}

