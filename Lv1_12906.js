// 같은 숫자는 싫어
function solution(arr) {
	let answer = [];
	answer.push(arr[0]);

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== answer[answer.length - 1]) {
			answer.push(arr[i]);
		}
	}

	return answer;
}
