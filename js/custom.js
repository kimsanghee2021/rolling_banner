const banner = document.querySelector('#banner');
const list = banner.querySelector('.list');
let num = 0;
let timer = null;
timer = setInterval(move, 10);

list.addEventListener('mouseenter',function(){
	clearInterval(timer);
});

list.addEventListener('mouseleave',function(){
	timer = setInterval(move, 10);
});

function move() {
	if (num < -240) {
		num = 0;
		list.append(list.firstElementChild);
	} else {
		num -= 2;
	}
	list.style.marginLeft = num + 'px';
}
