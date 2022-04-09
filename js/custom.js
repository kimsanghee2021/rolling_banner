const banner = document.querySelector('#banner');
const list = banner.querySelector('.list');
let num = 0;
let timer = null;



// timer = setInterval(move, 10);

// list.addEventListener('mouseenter',()=>{clearInterval(timer)});

// list.addEventListener('mouseleave',()=>{timer = setInterval(move, 10)});

// function move() {
// 	if (num < -240) {
// 		num = 0;
// 		list.append(list.firstElementChild);
// 	} else {
// 		num -= 2;
// 	}
// 	list.style.marginLeft = num + '00‚px';
// }
createList('data.json');
function createList(url){
	fetch(url)
	.then((data)=> {
		console.log(data);
		return data.json();
	})
	.catch((err)=>{
		console.log(err);
		console.log('data호출에 실패했습니다.');
	})
	.then((json)=>{
		console.log(json);
		const arr = json.imgSrc;
		let tags ='';
		console.log(arr);

		arr.forEach(function(el,idx){
			tags +=`
				<li>
					<a href=${el.pic}>
						<img src=${el.thumb}/>
					</a>
				</li>
			`
		});
		list.innerHTML = tags;
	});


}
