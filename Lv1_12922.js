// 수박수박수박수박수박수?
function solution(num) {
	let arr = [];

	for (let i = 1; i <= num; i++) {
		i % 2 ? arr.push('수') : arr.push('박');
	}

	return arr.join('');
}
