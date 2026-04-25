function calcMenu(){
document.getElementById("main").innerHTML=`

<div class="card">
<h3>Casting Speed</h3>
<input id="ton" placeholder="Ton">
<input id="time" placeholder="Time (min)">
<button onclick="speed()">Calculate</button>
<p id="r1"></p>
</div>

<div class="card">
<h3>Superheat</h3>
<input id="tap" placeholder="Tap Temp">
<input id="tun" placeholder="Tundish Temp">
<button onclick="sh()">Calculate</button>
<p id="r2"></p>
</div>

<div class="card">
<h3>Unit/Ton</h3>
<input id="u" placeholder="Total Unit">
<input id="m" placeholder="Metal">
<button onclick="unit()">Calculate</button>
<p id="r3"></p>
</div>

<div class="card">
<h3>Metal Loss %</h3>
<input id="tapwt" placeholder="Tap Weight">
<input id="billet" placeholder="Billet Weight">
<button onclick="loss()">Calculate</button>
<p id="r4"></p>
</div>

<div class="card">
<h3>Casting Time</h3>
<input id="metal" placeholder="Metal Ton">
<input id="speedm" placeholder="Ton/hr">
<button onclick="timecalc()">Calculate</button>
<p id="r5"></p>
</div>
`
}

function speed(){
let t=ton.value, tm=time.value;
r1.innerText=((t/tm)*60).toFixed(2)+" Ton/hr";
}

function sh(){
r2.innerText=(tap.value-tun.value)+" °C";
}

function unit(){
r3.innerText=(u.value/m.value).toFixed(2)+" Unit/Ton";
}

function loss(){
let l=((tapwt.value-billet.value)/tapwt.value)*100;
r4.innerText=l.toFixed(2)+" %";
}

function timecalc(){
r5.innerText=((metal.value/speedm.value)*60).toFixed(1)+" min";
}
