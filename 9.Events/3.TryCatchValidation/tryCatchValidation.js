(function (getValidation) {
    document.getElementById("clickable").addEventListener("click", onValidation);
    function onValidation(ev) {
        var name = document.getElementById('firstName').value;
        var inpObj = document.getElementById("yourAge").value;
        try {
            if (!isNaN(parseInt(name))) throw "Your name could not be a number!";
            if (name == "") throw "First Name field is empty.";
            if (inpObj == "") throw "The 'age' field is empty.";
            if (inpObj == 0) throw "Your age could not be '0'";
            if (inpObj < 0) throw "Your age could Not be negative";
            if (isNaN(inpObj)) throw "not a number";
            if (inpObj < 18) throw "You are unde age to vote";
            if (inpObj >= 18) throw "Your Vote has been submited";
        }
        catch (err) {
            alert(err);
        }
    }
}());




// try {
//     if (x == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
// }
// catch (err) {
//     alert(`Input is + ${err}`);
// }