const amountLabel = document.getElementById('amountLabel') as HTMLInputElement;
const btns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
const tipAmountSpan = document.getElementById('tipAmount') as HTMLSpanElement;
const billAmtLabel = document.getElementById('billAmtLabel') as HTMLInputElement;
const tipPercentLabel = document.getElementById('tipPercentLabel') as HTMLInputElement;
const tipAmtLabel = document.getElementById('tipAmtLabel') as HTMLInputElement;
const amtToBePaidLabel = document.getElementById('amtToBePaidLabel') as HTMLInputElement;
let inputValue = 0;
let tipPercent = 0;

export function runApp() {
    btns.forEach((btn, index) => {
        changeTipButton(btn, index);
    });


    amountLabel.addEventListener('input', () => {
        inputValue = amountLabel.valueAsNumber;
        calcPaymentsAndDisplay(inputValue);
    });
}

function calcPaymentsAndDisplay(amt: number) {
    billAmtLabel.value = `Bill amount: ${inputValue.toString()}`;
    const tipAmount = (inputValue * tipPercent);
    tipAmtLabel.value = `Tip Amount: ${tipAmount.toString()}`;
    amtToBePaidLabel.value = `Amount to be Paid: ${(inputValue + tipAmount).toString()}`;
}
function changeTipButton(btn: HTMLButtonElement, index: number) {
    btn.addEventListener('click', () => {
        tipPercent = parseFloat(btn.innerText) / 100;
        btns.forEach((n, i) => {
            if (i === index) {
                n.setAttribute('disabled', null);
            } else {
                n.removeAttribute('disabled');
            }
            tipAmountSpan.innerText = (tipPercent * 100).toString() + '%';
            tipPercentLabel.value = 'Tip amount: ' + (tipPercent * 100).toString() + '%';
            calcPaymentsAndDisplay(inputValue);
        });
    });
}


function handleTyping() {
    const value = amountLabel.valueAsNumber;
    console.log(value);
}

