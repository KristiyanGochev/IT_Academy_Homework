(function () {
    document.getElementById("clickable").addEventListener("click", onValidation);
    function onValidation(ev) {
        var name = document.getElementById('firstName');
        var inpObj = document.getElementById("yourAge");
        var isItANumber = document.getElementById('firstName').value;
        if (!isNaN(parseInt(isItANumber))) {
            alert("Your name could not be a NUMBER!")
        }
        else if (inpObj.value < 0) {
            alert("Your age could NOT be negative");
        }
        else if ((name.value == "") || (inpObj.value == "")) {
            alert("Please fill the empty fields");
        }
        else if ((inpObj.value == 0)) {
            alert("Your age could not be '0'");
        }
        else if (inpObj.checkValidity() == false) {
            alert(`${name.value}, you are under 18 years old.You are not eligible to Vote!!!`);
        }

        else {
            alert(`${name.value}, Your vote has been submitted.`);
        }

    }
}());
