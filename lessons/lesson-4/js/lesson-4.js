console.log('Lesson-4 JS');

document.getElementById("checkFields").addEventListener("click", function() {
	const field1 = document.getElementById('field1').value;
	const field2 = document.getElementById('field2').value; 
	if (field1 && field2){
		alert('Обидва поля заповнені! ✅ ');
	}else{
		alert('Не всі поля заповнені! ❌ ');
	}
});
document.getElementById("checkSum").addEventListener("click", function() {
	const NumberField1 = parseFloat(document.getElementById('NumberField1').value);
	const NumberField2 = parseFloat(document.getElementById('NumberField2').value);

	if (isNaN(NumberField1) || isNaN(NumberField2)) {
		alert("Будь ласка, введіть коректні числа в обидва поля! ❌");
		return;
	}

	if (NumberField1 + NumberField2 > 10){
		alert(`Сума значень полів ${NumberField1} і ${NumberField2} більша за 10! ✅ `);
	}else if (NumberField1 + NumberField2 === 10){
		alert(`Сума значень полів ${NumberField1} і ${NumberField2} дорівнює 10! ✅ `);
	}else{
		alert(`Сума значень полів ${NumberField1} і ${NumberField2} менша за 10! ❌ `);
	}
});
document.getElementById("checkJs").addEventListener("click", function() {
	const JsField = document.getElementById('JsField').value;

	if(JsField.includes('JavaScript') || JsField.includes('Java Script')){
		alert('Текст містить слово JavaScript ✅ ' );
  } else {
    alert('Текст не містить слово JavaScript ❌' );
	}
});
document.getElementById("checkRange").addEventListener("click", function() {
	const RangeField = document.getElementById('RangeField').value;
	if(RangeField > 10 && RangeField < 20){
		alert(`Число ${RangeField} входить в діапазон від 10 до 20 ✅`);
	} else{
		alert(`Число ${RangeField}  не входить в діапазон від 10 до 20 ❌`);
	}
});
document.getElementById("checkForm").addEventListener("click", function() {
	const name = document.getElementById('name').value;
	const passwd = document.getElementById('npasswd').value;
	const email = document.getElementById('email').value;

	const IsNameValid = name.length >= 3;
	const IsPasswdValid = passwd.length >= 6; 
	const IsEmailValid = email.includes('@') && email.indexOf('.') > email.index.Of('@');

	if(IsNameValid && IsPasswdValid && IsEmailValid){
		alert(`Name: ${name} \n Password: ${passwd} \n Email.`);
	}else{
		alert('Помилка: переконайтеся, що всі поля заповнені правильно');
	}
});

document.getElementById("startScript").addEventListener("click", function() {
document.getElementById("hw4").style.display = "flex";
document.getElementById("hw4").style.flexDirection = "column";
});