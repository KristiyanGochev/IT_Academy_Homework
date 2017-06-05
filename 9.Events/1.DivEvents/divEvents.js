(function () {
    document.getElementById("clickable").addEventListener("click", findDiv);
    function findDiv(ev) {
        var x = document.querySelectorAll(".example");
        x[0].style.backgroundColor = 'darkred';
    };

    document.getElementById("bigger").addEventListener("click", incraseSize);
    function incraseSize(ev) {
        var x = document.querySelectorAll(".example");
        x[0].style.fontSize = '50px';

    };
    document.getElementById("smaller").addEventListener("click", decraseSize);
    function decraseSize(ev) {
        var x = document.querySelectorAll(".example");
        var currentFont = x[0].style.fontSize;
        x[0].style.fontSize = '10px';

    };
}());

