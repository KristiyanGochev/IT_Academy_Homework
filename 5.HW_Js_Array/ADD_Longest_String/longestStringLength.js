var longWords = ["ManchesterUnited", "Arsenal", "Looserpool", "Chelsea", "City"];
var sorted = longWords.sort((a,b) => b.length - a.length );

document.write("longest string: " + sorted[0]);