console.log('Lesson-7 JS');
// document.getElementById("startScript").addEventListener('click', function(){
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

const arr = [12, 2, 4, 16, 64]
let result = 0
for (let i = 0; i < arr.length; i++) {
	result += arr[i];
}
console.log(result)

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

let max = 0;
for(let i = 0; i < setNum.length; i++){
	if(setNum[i] > max){
		max = setNum[i]
	}
}
console.log(max);

console.log('--------------------');

console.log('---------#7---------');
let findDoubleNum = [12, 4, 55, 17, 85, 35, 44, 65, 90, 7];
let doubleNumber = [];
for(let i = 0; i < findDoubleNum.length;i++){
	if(findDoubleNum[i] % 2 === 0){
		doubleNumber.push(findDoubleNum[i])
	}
}
console.log(doubleNumber);
console.log('--------------------');



// });
