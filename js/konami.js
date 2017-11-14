const pressed = [];
const secret = 'thesecret';

const handleKeyPress = ev => {
  pressed.push(ev.key);
  pressed.splice(-secret.length - 1, pressed.length - secret.length);
  if(pressed.join('') === secret) {
    alert('You figured it out!')
  }
};

window.addEventListener('keydown', handleKeyPress);