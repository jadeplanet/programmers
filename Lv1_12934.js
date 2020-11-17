// 정수 제곱근 판별
function solution(num) {
	const sqrt = Math.sqrt(num);
	return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}
