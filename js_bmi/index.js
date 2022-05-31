function onSubmit(event) {
  event.preventDefault();
  const w = parseFloat(event.target[0].value);
  const h = parseFloat(event.target[1].value);

  if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
    alert("is not ");
    return;
  }
  const bmi = w / (h * h);

  const res = document.getElementById("res");
  res.style.display = "flex";

  document.getElementById("bmi").innerText = bmi.toFixed(2);
  document.getElementById("meter").value = bmi;

  let common = true;
  let state = "정상";
  if (bmi < 18.5) {
    state = "저체중";
    common = false;
  }
  if (bmi >= 25) {
    state = "과체중";
    common = false;
  }

  const stateEl = document.getElementById("state");
  stateEl.innerText = state;
  stateEl.style.color = common ? "29FF21" : "FF3A3A";
}
