
$('#btn-submit').click(function (ev) {
    var $name = $('#firstName').val();
    var $age = $('#age').val();
    var $successAlert = $('.messageSuccess');
    var $unSuccessAlert = $('.messageUnSuccess');

    var $isItANumber = $('#firstName').val();
    if (($name == "") || ($age == "")) {
        alert("Please fill the empty fields");
        return;
    }


    if (!isNaN(parseInt($isItANumber))) {
        alert("Your name could not be a NUMBER!");
        return;
    }

    if ($age < 0) {
        alert("Your age could NOT be negative");
        return;
    }

    if ($age == 0) {
        alert("Your age could not be '0'");
        return;
    }

    if ($age < 18) {
        $($unSuccessAlert).removeAttr('id');
        return;
    }
    $($successAlert).removeAttr('id');


});

////Regresh Page\\\\

$('#btn-reset').click(function (ev) {
    setTimeout(function () {
        window.location.reload(1);
    }, 0);
});
