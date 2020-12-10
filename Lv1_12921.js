// 소수 찾기
function solution(num) {
	let arr = [];
	for (let i = 2; i <= num; i++) {
		let isPrime = true;
		let sqrt = Math.sqrt(i);
		for (let j = 0; arr[j] <= sqrt; j++) {
			if (i % arr[j] === 0) {
				isPrime = false;
				break;
			}
		}
		isPrime && arr.push(i);
	}
	return arr.length;
}
