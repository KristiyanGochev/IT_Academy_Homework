(function (getValidation) {
    document.getElementById("clickable").addEventListener("click", onValidation);
    function onValidation(ev) {
        var name = document.getElementById('firstName').value;
        var inpObj = document.getElementById("yourAge").value;
        try {
            if (!isNaN(parseInt(name))) throw new Error("Your name could not be a number!");
            if (name == "") throw new Error("First Name field is empty.");
            if (inpObj == "") throw new Error("The 'age' field is empty.");
            if (inpObj == 0) throw new Error("Your age could not be '0'");
            if (inpObj < 0) throw new Error("Your age could Not be negative");
            if (isNaN(inpObj)) throw new Error("not a number");
            if (inpObj < 18) throw new Error("You are unde age to vote");
            if (inpObj >= 18) throw new Error("Your Vote has been submited");
        }
        catch (err) {
            alert(err);
        }
    }
}());
