const N = 20;

const prime = (n) => {
  // idx 0, 1은 false / 나머지는 true인 길이가 n(idx : 0 ~ n)인 배열 생성
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  // i : n의 제곱근까지 loop
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      // i의 배수 false로 변경
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  return arr;
};

const isPrime = prime(N);
console.log(isPrime);

const answer = [];
for (let i = 0; i < N; i++) {
  isPrime[i] ? answer.push(i) : 0;
}

console.log(`${N}까지의 소수 목록`, answer);
console.log(`${N}까지의 소수 개수`, answer.length);
