// 플로이드 워셜 알고리즘 구현
function floydWarshall(graph) {
  const V = graph.length; // 정점의 수
  let dist = [...graph]; // 그래프를 복사하여 거리 행렬 초기화

  // k: 중간 정점
  for (let k = 0; k < V; k++) {
    // i: 시작 정점
    for (let i = 0; i < V; i++) {
      // j: 도착 정점
      for (let j = 0; j < V; j++) {
        // i에서 k를 거쳐 j로 가는 경로가 직접 가는 경로보다 짧으면 업데이트
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// 사용 예시
const INF = Number.MAX_SAFE_INTEGER;

// 예제 그래프 (인접 행렬 형태)
// 0은 자기 자신으로의 거리, INF는 직접 연결되지 않은 정점 간의 거리
const graph = [
  [0, 3, INF, 5],
  [2, 0, INF, 4],
  [INF, 1, 0, INF],
  [INF, INF, 2, 0],
];

// 알고리즘 실행
const result = floydWarshall(graph);

// 결과 출력
console.log("모든 정점 쌍 사이의 최단 거리:");
for (let i = 0; i < result.length; i++) {
  let row = "";
  for (let j = 0; j < result[i].length; j++) {
    if (result[i][j] === INF) {
      row += "INF ";
    } else {
      row += result[i][j] + "   ";
    }
  }
  console.log(row);
}

// 응용
// 백준 11403 에서는 최단 거리가 아닌, 경로 존재의 유무로 판단
