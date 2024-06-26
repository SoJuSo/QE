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
