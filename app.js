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

function knowMenu(){
document.getElementById("main").innerHTML=`
<div class="card">
<h3>CCM Basics</h3>
<p>Superheat: 20–30°C</p>
<p>High speed → cracks</p>
<p>Low speed → low production</p>
</div>
`;
}

function defectMenu(){
document.getElementById("main").innerHTML=`

<div class="card">

<h3>Select Defect</h3>

<button onclick="showDefect('crack')">Crack</button>
<button onclick="showDefect('slag')">Surface Slag</button>
<button onclick="showDefect('porosity')">Porosity</button>
<button onclick="showDefect('choking')">Nozzle Choking</button>
<button onclick="showDefect('bulging')">Bulging</button>
<button onclick="showDefect('breakout')">Breakout</button>

<div id="defDetail"></div>

</div>
`
}

function d(x){
let text="";

if(x==1) text="Crack: High temp / low cooling → Reduce temp, increase cooling";
if(x==2) text="Slag: Dirty metal → Improve slag practice";
if(x==3) text="Porosity: Gas → Proper deoxidation";
if(x==4) text="Pin hole: Hydrogen → Dry material";
if(x==5) text="Blow hole: Gas → Improve refining";

document.getElementById("def").innerText=text;
}

const defects = {

crack: {
title: "Billet Crack",
img: "https://i.imgur.com/8QZ7Z8F.jpg",
cause: "High temperature, low cooling, high casting speed",
effect: "Surface cracks, rejection in rolling",
solution: "Reduce superheat, increase secondary cooling, control speed"
},

slag: {
title: "Surface Slag",
img: "https://i.imgur.com/1X5kXQp.jpg",
cause: "Dirty metal, poor slag practice",
effect: "Surface defect, rolling rejection",
solution: "Improve slag removal, maintain clean metal"
},

porosity: {
title: "Porosity",
img: "https://i.imgur.com/yKQ9w9v.jpg",
cause: "Gas (H2, O2), poor deoxidation",
effect: "Internal holes, weak billet",
solution: "Proper deoxidation, dry raw material"
},

choking: {
title: "Nozzle Choking",
img: "https://i.imgur.com/jv8Q7WJ.jpg",
cause: "Low temperature, high inclusion",
effect: "Flow stop, casting interruption",
solution: "Increase temperature, clean nozzle"
},

bulging: {
title: "Bulging",
img: "https://i.imgur.com/Uc6V7gS.jpg",
cause: "Low cooling, weak shell",
effect: "Deformation of billet",
solution: "Increase secondary cooling"
},

breakout: {
title: "Breakout",
img: "https://i.imgur.com/xYf3k1P.jpg",
cause: "Thin shell, high temperature",
effect: "Molten metal leakage (danger)",
solution: "Reduce temp, proper mould cooling"
}

};
