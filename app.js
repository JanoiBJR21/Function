function tocelsius() {
    let fahrenheit = prompt("fahrenheit:")
    let value = (fahrenheit - 32) * 5 / 9
    document.getElementById("result_celsius").innerHTML = value.toFixed(2) + "°C"
    document.getElementById("result_fahrenheit").innerHTML = fahrenheit + "°F"
}
function tofahrenheit() {
    let celsius = prompt("celsius:")
    let value = (celsius * 9 / 5) + 32
    document.getElementById("fahrenheit_result").innerHTML = value.toFixed(2) + "°F"
    document.getElementById("celsius_result").innerHTML = celsius + "°C"
}
tocelsius()
tofahrenheit()
