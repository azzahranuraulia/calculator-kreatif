function switchMode(mode) {
  document.querySelectorAll('.calculator-section').forEach(s => s.classList.remove('active'));
  document.getElementById(mode).classList.add('active');
  document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById("modeAlert").textContent = `Mode: ${event.target.textContent}`;
}

function calculateBasic() {
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  const op = document.getElementById("operation").value;

  if (a === '' || b === '') return alert("Mohon isi kedua angka!");

  const numA = parseFloat(a);
  const numB = parseFloat(b);
  let result;
  switch (op) {
    case '+': result = numA + numB; break;
    case '-': result = numA - numB; break;
    case '*': result = numA * numB; break;
    case '/': result = numB !== 0 ? numA / numB : 'Tak Terhingga'; break;
  }
  document.getElementById("basicResult").textContent = `Hasil: ${result}`;
}

function updateShapeForm() {
  const shape = document.getElementById("shape").value;
  const form = document.getElementById("shapeForm");
  const fields = {
    square: '<input type="number" id="s" placeholder="Sisi">',
    rectangle: '<input type="number" id="p" placeholder="Panjang"><input type="number" id="l" placeholder="Lebar">',
    triangle: '<input type="number" id="a" placeholder="Alas"><input type="number" id="t" placeholder="Tinggi">',
    parallelogram: '<input type="number" id="ap" placeholder="Alas"><input type="number" id="tp" placeholder="Tinggi">',
    trapezoid: '<input type="number" id="a1" placeholder="Alas Atas"><input type="number" id="a2" placeholder="Alas Bawah"><input type="number" id="t2" placeholder="Tinggi">',
    circle: '<input type="number" id="r" placeholder="Jari-jari">'
  };
  form.innerHTML = fields[shape];
}

function calculateShape() {
  const shape = document.getElementById("shape").value;
  const g = id => document.getElementById(id).value;
  const isEmpty = (...ids) => ids.some(id => g(id) === '');

  let result = '';
  if (shape === 'square') {
    if (isEmpty("s")) return alert("Mohon isi sisi!");
    const s = parseFloat(g("s"));
    result = `L = ${s ** 2}, K = ${4 * s}`;
  }
  if (shape === 'rectangle') {
    if (isEmpty("p", "l")) return alert("Mohon isi panjang dan lebar!");
    const p = parseFloat(g("p")), l = parseFloat(g("l"));
    result = `L = ${p * l}, K = ${2 * (p + l)}`;
  }
  if (shape === 'triangle') {
    if (isEmpty("a", "t")) return alert("Mohon isi alas dan tinggi!");
    result = `L = ${(parseFloat(g("a")) * parseFloat(g("t"))) / 2}`;
  }
  if (shape === 'parallelogram') {
    if (isEmpty("ap", "tp")) return alert("Mohon isi alas dan tinggi!");
    result = `L = ${parseFloat(g("ap")) * parseFloat(g("tp"))}`;
  }
  if (shape === 'trapezoid') {
    if (isEmpty("a1", "a2", "t2")) return alert("Mohon isi semua nilai!");
    const a1 = parseFloat(g("a1")), a2 = parseFloat(g("a2")), t2 = parseFloat(g("t2"));
    result = `L = ${((a1 + a2) * t2) / 2}`;
  }
  if (shape === 'circle') {
    if (isEmpty("r")) return alert("Mohon isi jari-jari!");
    const r = parseFloat(g("r"));
    result = `L = ${(Math.PI * r ** 2).toFixed(2)}, K = ${(2 * Math.PI * r).toFixed(2)}`;
  }
  document.getElementById("shapeResult").textContent = result;
}

function updateSolidForm() {
  const solid = document.getElementById("solid").value;
  const form = document.getElementById("solidForm");
  const fields = {
    cube: '<input type="number" id="sc" placeholder="Sisi">',
    cuboid: '<input type="number" id="lp" placeholder="Panjang"><input type="number" id="wp" placeholder="Lebar"><input type="number" id="hp" placeholder="Tinggi">',
    sphere: '<input type="number" id="rs" placeholder="Jari-jari">',
    cylinder: '<input type="number" id="rc" placeholder="Jari-jari"><input type="number" id="hc" placeholder="Tinggi">',
    cone: '<input type="number" id="rk" placeholder="Jari-jari"><input type="number" id="hk" placeholder="Tinggi">'
  };
  form.innerHTML = fields[solid];
}

function calculateSolid() {
  const solid = document.getElementById("solid").value;
  const g = id => document.getElementById(id).value;
  const isEmpty = (...ids) => ids.some(id => g(id) === '');

  let result = '';
  if (solid === 'cube') {
    if (isEmpty("sc")) return alert("Mohon isi sisi kubus!");
    const sc = parseFloat(g("sc"));
    result = `Volume = ${sc ** 3}`;
  }
  if (solid === 'cuboid') {
    if (isEmpty("lp", "wp", "hp")) return alert("Mohon isi panjang, lebar, dan tinggi!");
    const lp = parseFloat(g("lp")), wp = parseFloat(g("wp")), hp = parseFloat(g("hp"));
    result = `Volume = ${lp * wp * hp}`;
  }
  if (solid === 'sphere') {
    if (isEmpty("rs")) return alert("Mohon isi jari-jari bola!");
    const rs = parseFloat(g("rs"));
    result = `Volume = ${((4 / 3) * Math.PI * rs ** 3).toFixed(2)}`;
  }
  if (solid === 'cylinder') {
    if (isEmpty("rc", "hc")) return alert("Mohon isi jari-jari dan tinggi tabung!");
    const rc = parseFloat(g("rc")), hc = parseFloat(g("hc"));
    result = `Volume = ${(Math.PI * rc ** 2 * hc).toFixed(2)}`;
  }
  if (solid === 'cone') {
    if (isEmpty("rk", "hk")) return alert("Mohon isi jari-jari dan tinggi kerucut!");
    const rk = parseFloat(g("rk")), hk = parseFloat(g("hk"));
    result = `Volume = ${((1 / 3) * Math.PI * rk ** 2 * hk).toFixed(2)}`;
  }
  document.getElementById("solidResult").textContent = result;
}

function calculateBMI() {
  const h = document.getElementById("height").value;
  const w = document.getElementById("weight").value;
  if (h === '' || w === '') return alert("Mohon isi berat dan tinggi!");
  const height = parseFloat(h) / 100;
  const weight = parseFloat(w);
  const bmi = weight / (height * height);
  let status = "";
  if (bmi < 18.5) status = "Kurus";
  else if (bmi < 25) status = "Normal";
  else if (bmi < 30) status = "Gemuk";
  else status = "Obesitas";
  document.getElementById("bmiResult").textContent = `BMI: ${bmi.toFixed(1)} (${status})`;
}

function convertUnit() {
  const val = document.getElementById("inputValue").value;
  const type = document.getElementById("convertType").value;
  if (val === '') return alert("Mohon isi nilai yang akan dikonversi!");
  const num = parseFloat(val);
  let result = '';
  if (type === 'cm-m') result = `${num / 100} meter`;
  if (type === 'm-km') result = `${num / 1000} km`;
  if (type === 'c-f') result = `${(num * 9 / 5 + 32).toFixed(1)} °F`;
  document.getElementById("convertResult").textContent = result;
}

updateShapeForm();
updateSolidForm();
