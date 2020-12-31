// K번째수
function solution(arr, com) {
	let answer = [];
	for (let i = 0; i < com.length; i++) {
		let newArr = arr.slice(com[i][0] - 1, com[i][1]);
		newArr.sort((a, b) => a - b);
		answer.push(newArr[com[i][2] - 1]);
	}
	return answer;
}
