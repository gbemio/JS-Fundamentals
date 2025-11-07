function factorial(n) {
    if (n === 0 || isNaN(n)) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  let num = parseInt(process.argv[2]);
  console.log(factorial(num));
  