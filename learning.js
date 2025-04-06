document.getElementById("timer").innerHTML = "Time left:: " + 60;

function timer_start() {
  var audio1 = new Audio('beep.wav');
  audio1.play();
  var seconds = 60; // timer length
  var timer;

  function myFunction() {
    if (seconds < 60) {
      document.getElementById("timer").innerHTML = "Time left:: " + seconds;
    }
    if (seconds > 0) {
      seconds--;
    } else {
      var audio2 = new Audio('endbeep.wav');
      audio2.onended = function () { alert("Times up!" + (countpictures * 1)) };
      audio2.play();
      clearInterval(timer);
    }
  }

  if (!timer) {
    timer = window.setInterval(function () {
      myFunction();
    }, 1000); // every second
  }
}

let del = "";
function show() { }

function remove(outElem) {
  while (outElem.hasChildNodes()) {
    outElem.removeChild(outElem.lastChild);
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let currentSequence = [];
let sequenceIndex = 0;

function getNextCardIndex() {
  if (sequenceIndex >= currentSequence.length) {
    currentSequence = [...Array(10).keys()]; // [0, 1, 2, ..., 9]
    shuffle(currentSequence);
    sequenceIndex = 0;
  }
  return currentSequence[sequenceIndex++];
}

function delay() {
  const outElem = document.querySelector(".images");

  remove(outElem);
  var audio = new Audio('Mouse_Click_Sound.mp3');
  audio.play();
  countpictures++;

  window.setTimeout(function () {
    const set1 = ["Set1P01.jpg", "Set1P02.jpg", "Set1P03.jpg", "Set1P04.jpg", "Set1P05.jpg", "Set1P06.jpg", "Set1P07.jpg", "Set1P08.jpg", "Set1P09.jpg", "Set1P10.jpg"];
    const set2 = ["Set2P01.jpg", "Set2P02.jpg", "Set2P03.jpg", "Set2P04.jpg", "Set2P05.jpg", "Set2P06.jpg", "Set2P07.jpg", "Set2P08.jpg", "Set2P09.jpg", "Set2P10.jpg"];
    const set3 = ["Set3P01.jpg", "Set3P02.jpg", "Set3P03.jpg", "Set3P04.jpg", "Set3P05.jpg", "Set3P06.jpg", "Set3P07.jpg", "Set3P08.jpg", "Set3P09.jpg", "Set3P10.jpg"];
    const set4 = ["Set4P01.jpg", "Set4P02.jpg", "Set4P03.jpg", "Set4P04.jpg", "Set4P05.jpg", "Set4P06.jpg", "Set4P07.jpg", "Set4P08.jpg", "Set4P09.jpg", "Set4P10.jpg"];
    const set5 = ["Set5P01.jpg", "Set5P02.jpg", "Set5P03.jpg", "Set5P04.jpg", "Set5P05.jpg", "Set5P06.jpg", "Set5P07.jpg", "Set5P08.jpg", "Set5P09.jpg", "Set5P10.jpg"];
    const set6 = ["Set6P01.jpg", "Set6P02.jpg", "Set6P03.jpg", "Set6P04.jpg", "Set6P05.jpg", "Set6P06.jpg", "Set6P07.jpg", "Set6P08.jpg", "Set6P09.jpg", "Set6P10.jpg"];

    let images = [];
    switch (document.getElementById("input").value) {
      case "1": images = set1; break;
      case "2": images = set2; break;
      case "3": images = set3; break;
      case "4": images = set4; break;
      case "5": images = set5; break;
      case "6": images = set6; break;
    }

    remove(outElem);

    function imgRandom() {
      const cardIndex = getNextCardIndex();
      var image = new Image();
      image.src = images[cardIndex];
      image.style.width = "400px";
      image.style.height = "380px";
      outElem.appendChild(image);
    }

    imgRandom();
  }, 0 * 1000); // this is the value of the delay
}
