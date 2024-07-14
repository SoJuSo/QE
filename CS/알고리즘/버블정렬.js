function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // 최적화: 이미 정렬된 경우 확인
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      // 인접한 요소를 비교하여 순서가 잘못되었으면 교환
      if (arr[j] > arr[j + 1]) {
        // 교환
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 교환이 일어나지 않았다면 이미 정렬된 상태이므로 종료
    if (!swapped) break;
  }

  return arr;
}

// 사용 예시
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("정렬 전:", arr);
bubbleSort(arr);
console.log("정렬 후:", arr);
