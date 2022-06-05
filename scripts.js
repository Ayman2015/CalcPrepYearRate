document.getElementById("submit").addEventListener("click", calculate)

function calculate() {
    debugger;
    var ft = document.getElementById("firstterm").value
    var st = document.getElementById("secondterm").value
    var y = document.getElementById("preparatoryyear").value
    // equation=(((ft+st)/2)*0.6 )+(((100*preparatoryyear)/240)*0.4)
    const value = (((parseFloat(ft) + parseFloat(st)) / 2) * 0.6) + (((100 * parseFloat( y)) / 240) * 0.4);// parseFloat(ft) + parseFloat(st) + parseFloat(y);
    document.getElementById("textField").value = value
}
