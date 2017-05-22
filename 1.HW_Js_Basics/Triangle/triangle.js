var a = 3,
    b = 4,
    c = 5;
    if (((a+b)>c) && ((a+c) >b) && ((c+b)> a)){
        console.log("The triangle could be constructed");
        document.getElementById('space').innerHTML = ("Side A ="+ a + "<br>" + "Side B ="+ b + "<br>" + "Side C =" + c + "<br>" + "Conclusion :  The triangle could be constructed");
    }
    else{
        console.log("The triangle could NOT be constructed");
       document.getElementById('space').innerHTML = ("Side A ="+ a + "<br>" + "Side B ="+ b + "<br>" + "Side C =" + c + "<br>" + "Conclusion :  The triangle could NOT be constructed");
    }