console.log('Lesson-5 JS');
document.getElementById("drinkSelect").addEventListener('change', function(){
	const select = this.value;
	switch(select){
		case "Кава":
			alert("Ви обрали каву ☕");
			break;
		case "Чай":
			alert("Ви обрали чай 🍵");
			break;
		case "Сік":
			alert("Ви обрали сік 🍹");
			break;
		default:
			alert("Виберіть напій");
	}
});
document.getElementById("checkDay").addEventListener('click', function(){
	const day = document.getElementById("inputDayField").value.toLowerCase();
	
	switch (day){
		case "понеділок":
		case "вівторок":
		case "середа":
		case "четвер":
		case "п'ятниця":
			alert("Робочий день");
			break;
		case"субота":
		case"неділля":
			alert("Вихідні");
			break;
		default:
			alert("Введіть правильний день тижня.");
	}

});
document.getElementById("checkSeason").addEventListener('click', function(){
	const month = parseInt(document.getElementById("monthField").value);
	
	switch (true){
		case (month >= 1 && month <= 3):
			alert("Це зима ❄️");
			break;
		case (month >=4 && month <=6):
			alert("Це весна 🍃");
		case (month >=7 && month <=9):
			alert("Це літо ☀️");
			break;
		case (month >=10 && month <= 12):
			alert("Це осінь 🍂")
			break;
		default:
			alert("Введіть правильний номер місяця");
	}
});
document.getElementById("checkDayInMonth").addEventListener('click', function(){
	const month = parseInt(document.getElementById('dayInMonth').value);

	switch( month ){
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
			alert('У цьому місяці 31 день');
			break;
		case 4: case 6: case 9: case 11:
			alert('У цьому місяці 30 день');
			break;
		case 2:
			alert('У цьомумісяці 28 днів');
			break;
		default:
			alert('Введіть правильну цифру місяця.');
	}
});
document.getElementById('colorCheckBtn').addEventListener('click', function(){
	const color = document.getElementById('colorCheckInp').value.toLowerCase();

	switch (color){
		case "червоний":
			alert('⛔ Стоп! ⛔');	
			break;
		case "жовтий":
			alert('🧍‍♂️ Чекати 🧍‍♂️ ');
			break;
		case "зелений":
			alert('🚶‍♂️‍➡️ Можеш йти 🚶‍♂️‍➡️')
			break;
		default:
			alert('Введіть колір:червоний,зелений або жовтий');
	}
});
document.getElementById('calculate').addEventListener('click', function(){
	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const option = document.getElementById('option').value;

	if (isNaN(num1) || isNaN(num2)){
		alert('Введіть число.');
		return;
	}
	switch (option){
		case '+':
			alert(`Результат: ${num1 + num2}`);
			break;
		case '-':
			alert(`Результат: ${num1 - num2}`);
			break;
		case '*':
			alert(`Результат: ${num1 * num2}`);
			break;
		case '/':
			if(num2 === 0){
				alert('Ділення на нуль не є можливим');
			}else{
				alert(`Результат: ${num1 / num2}`);
			}
			break;
		default:
			alter('Впишіть правильну цифру.');
	}
})