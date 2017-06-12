$('#btn-color').click(function (ev) {
    ev.preventDefault();
    var colors = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $('div:first').css("background-color", colors);

});

$('#btn-increase').click(function (ev) {
    var fontSize = parseInt($("div").css("font-size"));
    fontSize = fontSize + 1 + "px";
    $('div').css('font-size', fontSize);
});

$('#btn-decrease').click(function (ev) {
    var fontSize = parseInt($("div").css("font-size"));
    fontSize = fontSize - 1 + "px";
    $('div').css('font-size', fontSize);
});