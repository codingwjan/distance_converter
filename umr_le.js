function selectState() {
    var endState = document.getElementById('targetUnitID').value
    var selState = document.getElementById('sourceUnitID').value
    var inputID = document.getElementById("inputID").value
    var outputID = document.getElementById('resultID').innerHTML = outputID
    if (endState == selState) {
        alert("you cant convert into the same unit")
    }
    else {
        console.log("current value: " + inputID +" current state: " + selState + " // wanted value: " + endState)
        if (selState == "m") {
            var result = (inputID * 1000000000000)
        }
        else if (selState == "pm") {
            var result = (inputID * 1.E-12)
        }

        if (result > 1 && endState =="m") {
            result = Math.round(result)
        }
        outputID = ("result: " + result + " " + endState)
        document.getElementById('resultID').innerHTML = outputID
        console.log(outputID)
    }
   

}
