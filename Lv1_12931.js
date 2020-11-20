// 자릿수 더하기
function solution(num) {
	let arr = String(num).split('');
	let changeToNum = arr.map((element) => Number(element));
	return changeToNum.reduce((acc, cur) => acc + cur);
}
