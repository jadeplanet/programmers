// 제일 작은 수 제거하기
function solution(arr) {
	const min = Math.min(...arr);
	const index = arr.indexOf(min);

	arr.splice(index, 1);
	arr.length === 0 && arr.push(-1);

	return arr;
}
