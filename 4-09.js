// 콜백 지옥이란? 
// a. 콜백 함수를 익명함수로 전달하는 과정이 반복되어 코드의
//    들여쓰기 수준이 헬 수준인 경우
// b. 주로 이벤트 처리 및 서버 통신과 같은 비동기적 작업을 수행할 때 발생

// 동기 vs 비동기
// a. 동기와 비동기의 개념
//  1. 동기 : synchronous
//      i. 현재 실행중인 코드가 끝나야 다음 코드를 실행하는 방식
//      ii. CPU의 계산에 의해 즉시 처리가 가능한 대부분의 코드는 동기적 코드
//      iii. 계산이 복잡해서 CPU가 계산하는 데에 오래 걸리는 코드 역시도 동기적 코드

//  2. 비동기 : a + synchronous ⇒ async
//      i. 실행 중인 코드의 완료 여부와 무관하게 즉시 다음 코드로 넘어가는 방식
//      ii. setTimeout, addEventListener 등
//      iii. 별도의 요청, 실행 대기, 보류 등과 관련된 코드는 모두 비동기적 코드

// 비동기적 코드의 이해!
setTimeout(function () { 
    console.log("여기가 먼저 실행될까?!?!")
}, 1000);
console.log("여기 좀 봐주세요!!!!");

// 앞의 setTimeout이 끝나는 걸 기다리지 않고 먼저 실행함.
// -> 여기 좀 봐주세요!!!!
//    여기가 먼저 실행될까?!?!

