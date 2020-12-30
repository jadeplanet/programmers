// 3진법 뒤집기
let answer = [];
function solution(n) {
	let quotient = parseInt(n / 3);
	let remainder = n % 3;
	answer.unshift(remainder);

	if (quotient !== 0) {
		solution(quotient);
	}

	let result = 0;
	for (let i = 0; i < answer.length; i++) {
		let square = 3 ** i;
		result += answer[i] * square;
	}
	return result;
}
