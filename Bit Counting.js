var countBits = function(n) {
    const base = (n).toString(2).split('');
    const result = base.reduce((sum, num) => sum + Number(num), 0);   
    return result;
 };