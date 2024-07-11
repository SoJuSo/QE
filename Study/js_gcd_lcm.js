const [n, m] = [24, 15];

const sol = (num1, num2) => {
  return num2 ? sol(num2, num1 % num2) : num1;
};

console.log(sol(n, m)); // gcd
console.log((n * m) / sol(n, m)); // lcm
