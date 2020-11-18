// 정수 내림차순으로 배치하기
function solution(num) {
	let str = String(num).split('');
	return Number(
		str
			.map((element) => Number(element))
			.sort((a, b) => b - a)
			.join('')
	);
}
