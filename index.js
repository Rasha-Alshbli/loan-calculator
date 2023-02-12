const loanAmountEl = document.getElementById('loan-amount');
const interestRateEl = document.getElementById('interest-rate');
const monthPaymentEl = document.getElementById('month-to-pay');
const paymentAmountEl = document.getElementById('payment');



function calculateLoan() {
    loanAmountValue = loanAmountEl.value;
    interestRateValue = interestRateEl.value;
    monthPaymentValue = monthPaymentEl.value;

    interest = (loanAmountValue * (interestRateValue * 0.01)) / monthPaymentValue;

    monthlyPayment = (loanAmountValue / monthPaymentValue + interest).toFixed(2);

    paymentAmountEl.innerHTML = `Monthly Payment: ${monthlyPayment}`;
}