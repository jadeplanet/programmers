// 두 개 뽑아서 더하기
function solution(numbers) {
	const container = [];
	const answer = [];
	for (let i = 1; i < numbers.length; i++) {
		for (let j = 0; j < numbers.length - i; j++) {
			let sum = numbers[j] + numbers[numbers.length - i];
			container.push(sum);
		}
	}

	answer.push(container[0]);
	for (let i = 1; i < container.length; i++) {
		if (answer.indexOf(container[i]) === -1) {
			answer.push(container[i]);
		}
	}
	return answer.sort((a, b) => a - b);
}
