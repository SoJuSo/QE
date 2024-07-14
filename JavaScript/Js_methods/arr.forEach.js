// break 혹은 return이 불가능하다.
// 배열의 각 요소에 대해 실행할 함수이다.
// 반환값은 사용되지 않는다.
// https://chromium.googlesource.com/v8/v8/+/4.3.21/src/array.js?autodive=0%2F%2F
// array.js에 몰려있어서 찾는데 조금 헤멨다..

// 정리는 챗 지피티의 도움을 받음
/*
function ArrayForEach(f, receiver) {
  // this가 null 또는 undefined인지 확인하여 오류를 발생시킴
  CHECK_OBJECT_COERCIBLE(this, "Array.prototype.forEach");

  // this를 객체로 변환하여 array 변수에 저장함
  var array = ToObject(this);

  // 배열의 길이를 32비트 부호 없는 정수로 변환하여 length 변수에 저장함
  var length = TO_UINT32(array.length);

  // f가 함수인지 확인하여 함수가 아니면 TypeError를 발생시킴
  if (!IS_SPEC_FUNCTION(f)) {
    throw MakeTypeError('called_non_callable', [ f ]);
  }

  // needs_wrapper 변수를 false로 초기화함
  var needs_wrapper = false;

  // receiver가 null 또는 undefined인지 확인하여 기본 수신자를 설정함
  if (IS_NULL_OR_UNDEFINED(receiver)) {
    receiver = %GetDefaultReceiver(f) || receiver;
  } else {
    // receiver가 null 또는 undefined가 아니면 래퍼 객체가 필요한지 확인하여 needs_wrapper 변수에 저장함
    needs_wrapper = SHOULD_CREATE_WRAPPER(f, receiver);
  }

  // array가 배열인지 확인하여 is_array 변수에 저장함
  var is_array = IS_ARRAY(array);

  // 디버깅 모드가 활성화되어 있고 디버거가 스텝 기능을 지원하는지 확인하여 stepping 변수에 저장함
  var stepping = DEBUG_IS_ACTIVE && %DebugCallbackSupportsStepping(f);

  // 배열의 각 요소를 순회하기 위한 루프를 시작함
  for (var i = 0; i < length; i++) {
    // 현재 인덱스 i가 배열에 존재하는지 확인함
    if (HAS_INDEX(array, i, is_array)) {
      // 해당 요소를 element 변수에 저장함
      var element = array[i];

      // 디버깅 모드가 활성화되어 있다면 디버거 스텝을 준비함
      if (stepping) %DebugPrepareStepInIfStepping(f);

      // 래퍼 객체가 필요하다면 receiver를 객체로 변환하여 new_receiver 변수에 저장함
      // 그렇지 않으면 기존 receiver를 사용함
      var new_receiver = needs_wrapper ? ToObject(receiver) : receiver;

      // new_receiver, element, i, array를 인수로 하여 함수 f를 호출함
      %_CallFunction(new_receiver, element, i, array, f);
    }
  }
}

*/

// 20년에 정리된 어떤 걸 사용하면 좋을 지 정리된 글, reduce를 애용하자.
// https://miiingo.tistory.com/347

// !!! forEach는 중간에 멈출 수 없다 !!!
// forEach 사용법
const N = 20;
const arr = Array(N)
  .fill()
  .map((_, i) => i + 1);
arr.forEach((v) => console.log(v));
