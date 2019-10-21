const myStorage = window.localStorage;

export function ready(cb: () => void) {
    document.onreadystatechange = () => {
        if (document.readyState === 'interactive') {
            cb();
        }
    };
}


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
});


export function storeSelectedTip(tip: number) {
    myStorage.setItem('tipAmt', tip.toString());
}

export function getSelectedTip() {
    return parseFloat(myStorage.getItem('tipAmt'));
}
