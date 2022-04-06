const banner = document.querySelector('#banner');
const list = banner.querySelector('.list');
let num = 0;
let timer = null;

//로딩시 자동 롤링시작
timer = setInterval(move, 10);

//banner에 마우스 호버시 롤링 정지
banner.addEventListener('mouseenter', () => clearInterval(timer));

//banner에서 마우스가 떠나면 다시 롤링 시작
banner.addEventListener('mouseleave', () => (timer = setInterval(move, 10)));

//자동 이동 함수
function move() {
	if (num < -240) {
		num = 0;
		list.append(list.firstElementChild);
	} else {
		num -= 2;
	}
	list.style.marginLeft = num + 'px';
}
