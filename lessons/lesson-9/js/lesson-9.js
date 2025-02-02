console.log('Lesson-9 JS')

console.log('[1]')

function logItems(array) {
	for (let i = 0; i < array.length; i++) {
		console.log(`${i + 1} - ${array[i]}`)
	}
}
logItems(['Mango', 'Poly', 'Ajax'])

console.log('[2]')

function calculateEngravingPrice(message, pricePerWord) {
	let onlyWord = message.split(' ')
	return onlyWord.length * pricePerWord
}
console.log(calculateEngravingPrice('Hello world', 10))

console.log('[3]')

function  findLongestWord(string){
	let slovo = string.split(" ");
	let longestslovo = slovo[0];

	for (const word of slovo){
		if(word.length > longestslovo.length){
			longestslovo = word
		}
	}
	return longestslovo;
}
console.log(findLongestWord("Hello world. Today is a better day than yesterday"));

console.log('[4]')

function formatString(string){
	return string.length > 40 ? string.slice(0, 40) + "..." : string;
}
console.log(formatString("Меньше ніж 40 символів!"));
console.log(formatString("Занадто довгий рядок щоб обробити його! Треба скоротити негайно щоб він вмістився!!!"));

console.log('[5]')

function checkForSpam(message) {

	const lowerMessage = message.toLowerCase();
	return lowerMessage.includes("spam") || lowerMessage.includes("sale");
}

console.log(checkForSpam("Купуйте зараз по знижці"));
console.log(checkForSpam("Це sale!"));
console.log(checkForSpam("Спам атакує пошту!"));

console.log('[6]')

let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt("Введіть число або натисніть Cancel для виходу:");
    if (input === null) break;
    const number = Number(input);
    if (isNaN(number)) {
        alert("Було введено не число, спробуйте ще раз");
    } else {
        numbers.push(number);
    }
}
if (numbers.length > 0) {
    for (const num of numbers) {
        total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
    console.log("Ви не ввели жодного числа.");
}