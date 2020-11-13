// 최대공약수와 최소공배수
function solution(a, b) {
	const nanum_a = [];
	const nanum_b = [];
	const nanum = [];
	const answer = [];

	for (let i = 1; i <= a; i++) {
		a % i === 0 && nanum_a.push(i);
	}
	for (let i = 1; i <= b; i++) {
		b % i === 0 && nanum_b.push(i);
	}

	nanum_a.forEach(
		(element) => nanum_b.indexOf(element) !== -1 && nanum.push(element)
	);

	answer.push(nanum[nanum.length - 1]);
	// L = G*a*b
	const coprime_a = a / answer[0];
	const coprime_b = b / answer[0];
	const gob = answer[0] * coprime_a * coprime_b;
	answer.push(gob);

	return answer;
}
