// https://chromium.googlesource.com/v8/v8/+/4.3.21/src/math.js?autodive=0%2F%2F#86
// 실제 내장함수 코드 설명
/*
// ECMA 262 - 15.8.2.11
function MathMax(arg1, arg2) {  // 기본적으로 두 개의 인자를 받음
  var length = %_ArgumentsLength(); // 현재 함수에 전달된 인자의 총 수를 저장
  if (length == 2) { // 인자가 정확히 두 개일 때의 로직
    arg1 = TO_NUMBER_INLINE(arg1); // 첫 번째 인자를 숫자로 변환
    arg2 = TO_NUMBER_INLINE(arg2); // 두 번째 인자를 숫자로 변환
    if (arg2 > arg1) return arg2; // arg2가 더 크면 arg2 반환
    if (arg1 > arg2) return arg1; // arg1이 더 크면 arg1 반환
    if (arg1 == arg2) {
      // -0과 +0을 구별하여 -0이 +0보다 작다고 간주
      return (arg1 === 0 && %_IsMinusZero(arg1)) ? arg2 : arg1;
    }
    // 모든 비교가 실패하면, 한 인자가 NaN임. NaN 반환
    return NAN;
  }
  var r = -INFINITY; // 최댓값을 찾기 위한 초기값으로 -무한대 설정
  for (var i = 0; i < length; i++) { // 모든 인자를 순회
    var n = %_Arguments(i); // i번째 인자를 가져옴
    if (!IS_NUMBER(n)) n = NonNumberToNumber(n); // 인자가 숫자가 아니면 숫자로 변환
    // +0이 -0보다 크다고 간주하여 처리
    if (NUMBER_IS_NAN(n) || n > r || (r === 0 && n === 0 && %_IsMinusZero(r))) {
      r = n;
    }
  }
  return r; // 최댓값 반환
}

*/

// 사용 예제
console.log(Math.max(1, 10));
console.log(Math.max("5", "2210")); // 내부 로직에서 숫자로 변환하는 로직이 있기에 문자열 입력 가능
console.log(Math.max(-1, -3, -2));
console.log(Math.max(1, 10, 52, 234, 52, 52352, 53));

const max = [1, 2];
console.log(Math.max(...max)); // 배열이므로 스프레드 연산자를 통한 개별요소로 분해 후 할당
