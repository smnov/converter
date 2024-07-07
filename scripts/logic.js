function calculate() {
    var input = document.getElementById("numberInput").value
    var input2 = document.getElementById("numberInput2").value
    document.getElementById("output").innerText = (input / 1000) * input2
}