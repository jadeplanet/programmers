// 이상한 문자 만들기
function solution(str) {
	const answer = [];
	const word = str.split(' ');
	for (let i = 0; i < word.length; i++) {
		let letter = word[i].split('');
		for (let j = 0; j < letter.length; j++) {
			j % 2 === 0 && (letter[j] = letter[j].toUpperCase());
			j % 2 === 1 && (letter[j] = letter[j].toLowerCase());
		}
		answer.push(letter.join(''));
	}
	return answer.join(' ');
}
