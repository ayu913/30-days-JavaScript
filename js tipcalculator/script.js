const bill_Amount = document.querySelector("#bill_Amount");
const tip_Percentage = document.querySelector("#tip_Percentage");
const tip_Amount = document.querySelector("#tip_Amount");
const total_Amount = document.querySelector("#total_Amount");
const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  if (bill_Amount.value !== "" && tip_Percentage.value !== "") {
    tip_Amount.value =
      (Number(tip_Percentage.value) / 100) * Number(bill_Amount.value);
    total_Amount.value = Number(bill_Amount.value) + Number(tip_Amount.value);
  } else {
    confirm("please Enter Correct Value");
  }
});

function myFunction() {
  document.getElementById("amount").reset();
}
