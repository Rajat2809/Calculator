export function roundOf(num) {
    if (!num) return 0;
    num = parseFloat(num).toFixed(4);
    if (num % 1 === 0) return parseInt(num);
    return num;
}