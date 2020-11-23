// 약수의 합
function solution(num) {
	let arr = [];
	for (let i = 1; i <= num; i++) {
		num % i === 0 && arr.push(i);
	}
	num === 0 && arr.push(0);
	return arr.reduce((acc, cur) => acc + cur);
}
