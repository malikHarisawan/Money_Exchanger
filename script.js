const currency1 = document.getElementById("currency-one");
const amount1 = document.getElementById("amount-one");
const currency2 = document.getElementById("currency-two");
const amount2 = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const rateEl = document.getElementById("rate");

function calculate() {
  const curVal = currency1.value;
  const cur2Val = currency2.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/3fa33ae464064d77faf21f34/latest/${curVal}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[cur2Val];
      amount2.value = (amount1.value * rate).toFixed(2);
      rateEl.innerHTML = `1 ${curVal} = ${rate} ${cur2Val}`;
    });
}

currency1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
currency2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);


swap.addEventListener('click',()=>{
    let temp = currency1.value;
    currency1.value= currency2.value;
    currency2.value=temp;

    calculate();
})

calculate();
