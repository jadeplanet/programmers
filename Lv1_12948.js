// 핸드폰 번호 가리기
function solution(phone_number) {
	let arr = phone_number.split('');
	for (let i = 0; i < arr.length - 4; i++) {
		arr[i] = '*';
	}
	return arr.join('');
}

// 주민등록번호였다면..?
// function solution(str){
//   const regex = /\d(?!\d{6})/g
//   const num = str.split('-');
//   num[1] = num[1].replace(regex, '*')
//   return num.join('-')
// }
