// 시저 암호
function solution(str, num) {
	const isUpperCase = /[A-Z]/;
	const isLowerCase = /[a-z]/;

	const ascii = [];
	for (let i = 0; i < str.length; i++) {
		if (isUpperCase.test(str[i])) {
			let newAsc = str.charCodeAt(i) + num;
			newAsc >= 91 && (newAsc -= 26);
			ascii.push(newAsc);
		}
		if (isLowerCase.test(str[i])) {
			let newAsc = str.charCodeAt(i) + num;
			newAsc >= 123 && (newAsc -= 26);
			ascii.push(newAsc);
		}
		if (str[i] === ' ') {
			ascii.push(32);
		}
	}

	const answer = [];
	for (let i = 0; i < ascii.length; i++) {
		let newStr = String.fromCharCode(ascii[i]);
		answer.push(newStr);
	}

	return answer.join('');
}
