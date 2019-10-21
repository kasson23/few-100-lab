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
