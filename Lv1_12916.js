// 문자열 내 p와 y의 개수
function solution(str) {
	let countP = 0;
	let countY = 0;
	let letter = str.split('');

	letter.forEach((element) => (element === 'p' || element === 'P') && countP++);
	letter.forEach((element) => (element === 'y' || element === 'Y') && countY++);

	return countP === countY || (countP === 0 && countY === 0) ? true : false;
}
