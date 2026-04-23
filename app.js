// 🔑 API KEY (yahan apni key daalo)
const API_KEY = "YOUR_API_KEY_HERE";

// 🎯 Practice Data
let levels = {
  day1: [
    "I am ready",
    "I need water",
    "I am going to the plant",
    "I am learning English",
    "I can do this"
  ]
};

let currentIndex = 0;

// 🔊 SPEAK
function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speech.rate = 0.8;
  window.speechSynthesis.speak(speech);
}

// 🎯 Practice Start
function startPractice() {
  let sentence = levels.day1[currentIndex];
  document.getElementById("en").innerText = sentence;
  speak(sentence);
}

// 🎤 AI SPEECH CHECK
function checkSpeech() {
  let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = function(e) {
    let spoken = e.results[0][0].transcript;
    let correct = levels.day1[currentIndex];

    aiCorrection(spoken, correct);
  };

  recognition.start();
}

// 🤖 AI CORRECTION
async function aiCorrection(spoken, correct) {
  try {
    let res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `User said: "${spoken}". Correct sentence: "${correct}". Give score out of 100 and correction.`
          }
        ]
      })
    });

    let data = await res.json();
    let output = data.choices[0].message.content;

    document.getElementById("score").innerText = output;

  } catch (err) {
    document.getElementById("score").innerText = "Offline mode (AI unavailable)";
  }
}

// 🔥 AI TRANSLATE (Hindi → English)
async function translate() {
  let input = document.getElementById("input").value;

  try {
    let res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Translate this to English and Tamil: "${input}"`
          }
        ]
      })
    });

    let data = await res.json();
    let output = data.choices[0].message.content;

    document.getElementById("en").innerText = output;

  } catch (err) {
    document.getElementById("en").innerText = "Offline mode";
  }
      }
