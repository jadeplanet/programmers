// 평균 구하기
function solution(arr) {
	const sum = arr.reduce((acc, cur) => acc + cur);
	return sum / arr.length;
}
