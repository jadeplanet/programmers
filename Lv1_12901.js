// 2016년
function solution(a, b) {
	let weekday = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
	let lastdayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	let accDay = b;

	for (let i = 0; i < a - 1; i++) {
		accDay = accDay + lastdayOfMonth[i];
	}

	let index = accDay % 7;

	return weekday[index];
}
