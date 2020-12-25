// 나누어 떨어지는 숫자 배열
function solution(arr, num) {
	let answer = [];

	arr.forEach((element) => element % num === 0 && answer.push(element));
	!answer.length && answer.push(-1);

	return answer.sort((a, b) => a - b);
}
