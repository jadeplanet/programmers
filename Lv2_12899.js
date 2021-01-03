// 124 나라의 숫자
function solution(num) {
	let answer = '';
	let numObj = { 1: '1', 2: '2', 0: '4' };

	let share = 1;
	let rest = 1;

	while (share !== 0) {
		share = parseInt(num / 3);
		rest = num % 3;
		if (rest === 0) {
			share = share - 1;
		}

		num = share;
		answer = numObj[rest] + answer;
	}
	return answer;
}
