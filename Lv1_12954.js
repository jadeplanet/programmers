// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
	const answer = [];

	for (let i = x; answer.length !== n; i = i + x) {
		answer.push(i);
	}

	return answer;
}
