function playsound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  // 예외처리, audio key가 아닌것을 눌렀을때 함수 멈추기
  if(!audio) return;
 
  //키를 누르는것과 타이밍이 같도록, 딜레이 없게 설정 
  audio.currentTime = 0; 

  // 키가 눌린것을 시각적으로 볼 수 있도록 css에서 미리 정의한 playing 클래스 추가 

  //play()를 통해 삽입한 오디오 재생 
  audio.play(); 
  key.classList.add('playing');
}

// 문제점!
/* playsound 함수를 통해서 키가 눌렸을때 playing 클래스가 추가되어 키가 눌린것을
  시각적으로 확인 가능 그러나 
  키를 떼어냈을때도 .playing이 추가된 상태로 스타일이 적용되어 문제!
  -> class를 제거하자! 
*/
function removeTransition(e) {
  // playing class(transofom: scale(1.2)적용된)게 없으면 skip하도록 예외처리
  if(e.propertyName !== 'transform') return;
  // 이 키에 playing클래스를 제거해주세요
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// keydown 이벤트가 발생했을때
// play sound 함수 실행
window.addEventListener('keydown', playsound);

