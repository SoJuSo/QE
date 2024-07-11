const N = 20;

// 소수 판별
const isPrime = (num) => {
  const arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
};

const prime = isPrime(N);

const answer = [];
for (let i = 0; i < N; i++) {
  prime[i] ? answer.push(i) : 0;
}

console.log(prime);
console.log(`${N}까지의 소수 목록`, answer);
console.log(`${N}까지의 소수 개수`, answer.length);

// 2차원 미충접 배열 선언하기
const arr = Array.from(Array(N), () => new Array(N));

// 자바스크립트로 구현하는 깊이 우선 탐색과 너비 우선 탐색

// 객체 형태의 그래프
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  const visited = [];
  let needVisited = [];

  needVisited.push(startNode);
  while (needVisited.length) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...graph[node], ...needVisited];
    }
  }

  return visited;
};

const BFS = (graph, startNode) => {
  const visited = [];
  let needVisited = [];

  needVisited.push(startNode);
  while (needVisited.length) {
    const node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...needVisited, ...graph[node]];
    }
  }

  return visited;
};

console.log(DFS(graph, "A").join(" "));
console.log(BFS(graph, "A").join(" "));
