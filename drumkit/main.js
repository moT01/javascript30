const buttons = Array.from(document.querySelectorAll('.key'));
const sounds = [
  './sounds/clap.wav',
  './sounds/hihat.wav',
  './sounds/kick.wav',
  './sounds/openhat.wav',
  './sounds/boom.wav',
  './sounds/ride.wav',
  './sounds/snare.wav',
  './sounds/tom.wav',
  './sounds/tink.wav'
];

buttons.forEach((button, index) => {
  button.addEventListener('mousedown', function() {
    playDrum(index);
  });
});

document.onkeypress = function(e) {
  var charCode = e.charCode;
  
  switch(charCode) {
    case 65: case 97:
      playDrum(0);
      break;

    case 83: case 115:
      playDrum(1);
      break;

    case 68: case 100:
      playDrum(2);
      break;
    
    case 70: case 102:
      playDrum(3);
      break;
    
    case 71: case 103:
      playDrum(4);
      break;

    case 72: case 104:
      playDrum(5);
      break;

    case 74: case 106:
      playDrum(6);
      break;

    case 75: case 107:
      playDrum(7);
      break;

    case 76: case 108:
      playDrum(8);
      break;
      
    default:
      break;
  }
};

function playDrum(index) {
  buttons[index].classList.add('playing');
  setTimeout(function() {
    buttons[index].classList.remove('playing');
  }, 50);
  let sound = new Audio(sounds[index]).play();
}
