// 하샤드 수
function solution(num) {
	const digit = String(num)
		.split('')
		.map((element) => Number(element));
	const digitSum = digit.reduce((acc, cur) => acc + cur);

	return Number.isInteger(num / digitSum);
}
