function translate() {
  let input = document.getElementById("input").value.toLowerCase();

  if (data[input]) {
    document.getElementById("en").innerText = data[input].en;
    document.getElementById("ta").innerText = data[input].ta;
  } else {
    document.getElementById("en").innerText = "Not found";
    document.getElementById("ta").innerText = "-";
  }
}

// 🎤 Voice Input
function startVoice() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "hi-IN";

  recognition.onresult = function(event) {
    document.getElementById("input").value = event.results[0][0].transcript;
  };

  recognition.start();
}
