// 📊 CALCULATORS
function showCalc() {
  document.getElementById("content").innerHTML = `
  <div class="box">
    <h3>Casting Speed (Ton/hr)</h3>
    <input id="ton" placeholder="Metal (Ton)">
    <input id="time" placeholder="Time (min)">
    <button onclick="calcSpeed()">Calculate</button>
    <p id="res1"></p>

    <h3>Superheat</h3>
    <input id="tap" placeholder="Tap Temp">
    <input id="tundish" placeholder="Tundish Temp">
    <button onclick="calcSuperheat()">Calculate</button>
    <p id="res2"></p>

    <h3>Unit/Ton</h3>
    <input id="unit" placeholder="Total Unit">
    <input id="metal" placeholder="Total Ton">
    <button onclick="calcUnit()">Calculate</button>
    <p id="res3"></p>
  </div>`;
}

// 📊 FUNCTIONS
function calcSpeed() {
  let ton = document.getElementById("ton").value;
  let time = document.getElementById("time").value;
  let tph = (ton / time) * 60;
  document.getElementById("res1").innerText = tph.toFixed(2) + " Ton/hr";
}

function calcSuperheat() {
  let tap = document.getElementById("tap").value;
  let tundish = document.getElementById("tundish").value;
  let sh = tap - tundish;
  document.getElementById("res2").innerText = sh + " °C";
}

function calcUnit() {
  let u = document.getElementById("unit").value;
  let m = document.getElementById("metal").value;
  document.getElementById("res3").innerText = (u/m).toFixed(2) + " Unit/Ton";
}

// 📘 KNOWLEDGE
function showKnow() {
  document.getElementById("content").innerHTML = `
  <div class="box">
    <h3>Superheat</h3>
    <p>Ideal: 20–30°C</p>

    <h3>Casting Speed</h3>
    <p>High speed → cracks</p>
    <p>Low speed → low production</p>

    <h3>Nozzle Choking</h3>
    <p>Cause: Low temp / inclusion</p>
    <p>Solution: Increase temp</p>

    <h3>Cooling</h3>
    <p>High cooling → cracks</p>
    <p>Low cooling → bulging</p>
  </div>`;
}

// ⚠️ DEFECT ENGINE
function showDefect() {
  document.getElementById("content").innerHTML = `
  <div class="box">
    <button onclick="defect('crack')">Crack</button>
    <button onclick="defect('slag')">Slag</button>
    <button onclick="defect('choking')">Choking</button>

    <p id="def"></p>
  </div>`;
}

function defect(type) {
  let text = "";

  if(type=="crack"){
    text = "Cause: High temp / low cooling\nSolution: Reduce temp & increase cooling";
  }
  if(type=="slag"){
    text = "Cause: Dirty metal\nSolution: Improve slag practice";
  }
  if(type=="choking"){
    text = "Cause: Low temp\nSolution: Increase superheat";
  }

  document.getElementById("def").innerText = text;
}
