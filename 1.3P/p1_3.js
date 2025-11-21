function changeName(){
    var textsArray = ["SIT 725", "SIT 727", "SIT 718", "SIT 719", "SIT 775", "SIT 721", "SIT 711", "SIT 737"];
    var number = getRandomNumberBetween(0, textsArray.length - 1);

    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

function getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
