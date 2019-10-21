import { formatter, storeSelectedTip, getSelectedTip } from './utils';

const amountLabel = document.getElementById('amountLabel') as HTMLInputElement;
const btns = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
const tipAmountSpan = document.getElementById('tipAmount') as HTMLSpanElement;
const billAmtLabel = document.getElementById('billAmtLabel') as HTMLInputElement;
const tipPercentLabel = document.getElementById('tipPercentLabel') as HTMLInputElement;
const tipAmtLabel = document.getElementById('tipAmtLabel') as HTMLInputElement;
const amtToBePaidLabel = document.getElementById('amtToBePaidLabel') as HTMLInputElement;
const badInputLabel = document.getElementById('badInputLabel') as HTMLDivElement;

let inputValue = 0;
const tipPercent = 0;

window.onload = () => {
    // Code if need to get local storage for last tip amount
    document.querySelectorAll('.btn').item(2).setAttribute('disabled', null);
    calcPaymentsAndDisplay(inputValue);
    storeSelectedTip(.20);
    showTipAmtInLabels(getSelectedTip());
};


export function runApp() {
    btns.forEach((btn, index) => {
        changeTipButton(btn, index);
    });

    amountLabel.addEventListener('input', () => {
        inputValue = amountLabel.valueAsNumber;
        if (inputValue < 0 || !inputValue) {
            // Could refactor these add and remove
            amountLabel.classList.add('badInput');
            badInputLabel.classList.remove('displayNone');
        } else {
            calcPaymentsAndDisplay(inputValue);
            amountLabel.classList.remove('badInput');
            badInputLabel.classList.add('displayNone');
        }
    });
}

function changeTipButton(currentBtn: HTMLButtonElement, index: number) {
    currentBtn.addEventListener('click', () => {

        storeSelectedTip(parseFloat(currentBtn.innerText) / 100);
        btns.forEach((n, i) => {
            if (i === index) {
                n.setAttribute('disabled', null);
            } else {
                n.removeAttribute('disabled');
            }
        });
        showTipAmtInLabels(getSelectedTip());

        if (inputValue < 0 || !inputValue) {
            // Could refactor these add and remove
            amountLabel.classList.add('badInput');
            badInputLabel.classList.remove('displayNone');
        } else {
            calcPaymentsAndDisplay(inputValue);
            amountLabel.classList.remove('badInput');
            badInputLabel.classList.add('displayNone');
        }
    });
}


function showTipAmtInLabels(tip: number) {
    tipAmountSpan.innerText = (tip * 100).toString() + '%';
    tipPercentLabel.value = 'Tip amount: ' + (tip * 100).toString() + '%';
}

function calcPaymentsAndDisplay(amt: number) {
    billAmtLabel.value = `Bill amount: ${formatter.format(inputValue)}`;
    const tipAmount = (inputValue * getSelectedTip());
    tipAmtLabel.value = `Tip Amount: ${formatter.format(tipAmount)}`;
    amtToBePaidLabel.value = `Amount to be Paid: ${formatter.format((inputValue + tipAmount))}`;
}
