// html elements needed
const scoreBox = document.getElementById("scoreBox"),
  hover = document.getElementById("hover"),
  scoreDis = document.getElementById("scoreDis"),
  quote = document.getElementById("quote"),
  losePage = document.getElementById("losePage"),
  dataInp = document.getElementById("dataInp"),
  btn = document.getElementById("btn"),
  ctn = document.getElementById("contain");

// some basics to be declared before hand
var setInter;
let dNum = null,
  xVal = 50,
  yVal = 50,
  fSize = 4 + "vh",
  score = 0;

/* _-_-_-   function to generate a random Numbers   -_-_-_ */
// Random no.
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Random place
function getRandomPlace(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
}

// Random size
function getRandomSize(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// function to display the Number
function dis() {
  // genertaing some randoms
  dNum = getRandomInt(50);
  xVal = getRandomPlace(25, 75);
  yVal = getRandomPlace(25, 75);
  fSize = getRandomSize(3, 11);

  //   setting setInterval
  setInter = setInterval(blinker, 90);
  // blocking the NEXT BUTTON so that user can't click it again until he has answered
  btn.setAttribute("disabled", "");
  btn.style = `cursor:not-allowed;`;

  // giving the number a new random place
  ctn.style = `position:absolute; left:${xVal}%; top:${yVal}%; font-size:${fSize}vh; display:block;`;

  // function to display the number for just few moments of time
  function blinker() {
    ctn.style = `display:none`;
    clearInterval(setInter);
  }

  // adding a "0" if the random number is less than 10 so that user don't confuse
  if (dNum < 10) {
    dNum = "0" + dNum;
  }

  // finally displaying the value
  ctn.innerHTML = dNum;
}


// function to check user data
function check() {
   // unblocking the button
  btn.style = `cursor:pointer;`;
  btn.removeAttribute("disabled");

   // mathching the data of the user(and giving the reaction)

   // if user value is correct
  if (dataInp.value == dNum){
    hover.style = `display:block;`;
    function hovFnc() {
      setInterval(() => {
        hover.style = `display:none;`;
      }, 800);
    }
    // increasing the score 
    score = score + 1;
    hovFnc();
    scoreBox.innerHTML = `${score}`;
    scoreDis.innerHTML = score;
    // console.log(` correct one ${score}`); // debug statement
    // removing the value of the input 
    dataInp.value = null;
  } 
  // if user value is wrong
  else {
    //console.log(`you lose that was ${dNum}`); //debug statement
    losePage.style = `display:grid;`;
    quote.innerHTML = ` !!!!!-KILLED-!!!!! <br/> You Lose <br/> Better Luck Next Time. <br/> Well You were Killed by " ${dNum} " <br/> -by The Number?`;
  }
}
