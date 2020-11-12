// 콜라츠 추측
function solution(num) {
	let count = 0;
	while (num !== 1) {
		count++;
		num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
		if (count === 500) {
			count = -1;
			break;
		}
	}
	return count;
}
