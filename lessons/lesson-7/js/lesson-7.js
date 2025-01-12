console.log('Lesson-7 JS');

console.log('---------#1---------');

let num = [1, 2, 3];
console.log("значення другого елемента до зміни:",num);
num[1] = 10;
console.log("значення другого елемента після зміни:",num);
console.log('--------------------');

console.log('---------#2---------');

let str = ['lolek', 'bolek', 'ala ma kota'];
str.push('pyrizhok');
console.log(str);
console.log('--------------------');

console.log('---------#3---------');

console.log('--------------------');

console.log('---------#4---------');
let numArr = [1, 12, 42, 87, 75];
for(let i = 0; i < numArr.length ;i++){
	console.log(numArr[i]);
}
console.log('--------------------');

console.log('---------#5---------');
let strArr = ['tortyk', 'chai', 'ptashka', 'lizhko', 'nis'];
for(let i = 0; i < strArr.length; i++){
	if(strArr[i].length > 5){
		console.log(strArr[i]);
	}
}
console.log('--------------------');

console.log('---------#6---------');
let setNum = [10, 23, 5, 102, 40, 11, 421, 23, 155, 50];
let maxNum = Math.max(...setNum)
console.log(maxNum);
console.log('--------------------');

console.log('---------#7---------');
let findDoubleNum = [12, 4, 55, 17, 85, 35, 44, 65, 90, 7];
let filterNum = findDoubleNum.filter(i => i % 2 === 0);
console.log(filterNum);
console.log('--------------------');
