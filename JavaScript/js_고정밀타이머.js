const start = process.hrtime();

// 수행할 작업
const str = "work";
for (let i = 0; i < 10; i++) {
  //   console.log(`work`);
}
console.log(str.repeat(10));

const end = process.hrtime(start);
console.log(`작업 시간: ${end[0]}초 ${end[1] / 1e6}밀리초`);

/**
 * 윈도우 10에서 특정 버전 이후 고정밀타이머 강제 해제 X
 * 맥의 경우도 고정밀 타이머 지원
 *
 * 브라우저의 경우 performance
 * 구형 브라우저에서는 어떻게 할 것인가?
 * request animation time?
 *
 * 1초를 어떻게 보장할 것인가
 */
