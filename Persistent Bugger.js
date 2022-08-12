function persistence(num){
    let count = 0;
    let digits = num.toString();
    while(digits.length > 1) {
      digits = digits.split('').reduce((acc, cur) => acc * cur, 1).toString();
      count++;
  }
    return count;
  }