// 자연수 뒤집어 배열로 만들기
function solution(num) {
	let newElement = String(num).split('').reverse();
	return newElement.map((str) => Number(str));
}
