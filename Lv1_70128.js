// 내적
function solution(a, b) {
	let answer = 0;
	for (let i = 0; i < a.length; i++) {
		let multiply = a[i] * b[i];
		answer += multiply;
	}
	return answer;
}
