// 문자열 다루기 기본
function solution(str) {
	let index = /[a-zA-Z]/gi;
	return (str.length === 4 || str.length === 6) && index.test(str) === false;
}
