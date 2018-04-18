window.speechSynthesis.getVoices();

function speechApiSay(message, callback?) {
  const msg = new SpeechSynthesisUtterance();

  msg.text = message;
  msg.voice = window.speechSynthesis
    .getVoices()
    .filter(v => v.lang === 'pl-PL')[1];
  msg.lang = 'pl-PL';

  msg.onend = () => {
    if (callback) {
      callback();
    }
  };

  window.speechSynthesis.speak(msg);
}

export default {
  speechApiSay,
};
