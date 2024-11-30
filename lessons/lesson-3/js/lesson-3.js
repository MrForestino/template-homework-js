console.log('Lesson-3 JS');

//todo [2]
//? 2-1.За допомогою ключового слова const оголоси дві змінні:
//? productName - для зберігання назви товару (coffee),
//? productPrice - для зберігання ціни за одиницю товару.
//? Вивести в консоль одним рядком назву товара та його ціну
//? використовуючі різні варіанти виводу в консоль

let productName = "cofee";
let productPrice = 100;
console.log("Name product:", productName,",","price:", productPrice);
console.log("Name product: "+ productName + ", " + "price: "+ productPrice);
console.log(`Name product:  ${productName},  price:  ${productPrice}`);


//? 2-2.Змінити ім'я товару на "Brazilian coffee"
//? та збільшили його ціну на 20%.
//? Перевизначити значення змінних productName 
//? і productPrice після їх оголошення.
//? У змінну productPrice записати математичну 
//? операцію яка збільшує її занення на 20%
//? Вивести в консоль одним рядком назву товара 
//? та його ціну будь якими способом

productName = "Brazilian coffee";
productPrice *= 1.2;
//productPrice = productPrice * 1.2 ;
console.log(`Name product:  ${productName},  price:  ${productPrice}`);
