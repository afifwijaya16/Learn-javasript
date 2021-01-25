// challenge 1
function ageInDays(){
    var year = new Date().getFullYear();
    var birthYear = prompt("Tahun berapa kamu di lahirkan?");
    var ageInDayss = (year - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are ' + ageInDayss +' days old');
    h2.setAttribute('id', 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('text-box-result').appendChild(h2);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// challenge 2
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("text-box-result-challenge-2");
    image.src ="https://cdn2.thecatapi.com/images/0NFsnGxek.jpg";
    image.style.height ="5rem";
    image.style.width ="3rem";
    image.classList.add("p-1")
    image.classList.add("img-fluid")
    div.appendChild(image);
}

function rpsGame(yourchoise) {
    console.log(yourchoise);
    var humanChoise, botChoise;
    results = decideWinner(humanChoise,botChoise);
    message = finasResult(results);
    rpsFrontEnd(yourchoise,botChoise,message);
}

function randToRpsnt() {
    return Math.floor(Math.random() * 3); 
    // 3.17.47  https://www.youtube.com/watch?v=Qqx_wzMmFeA
}

 