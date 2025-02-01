console.log('Lesson-8 JS');

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';

for(let i = 0; i < friends.length; i++){
	string += friends[i];
	! friends.length -1, string += ',';
}
string = friends.join(",");
console.log(string);


console.log('#----------------------------#');
console.log('Метод splice()');


const cards = [
	"Карточка-1", 
	"Карточка-2", 
	"Карточка-3", 
	"Карточка-4", 
	"Карточка-5", 
]; 
console.log("Картки: ",cards);
const cardToRemove = "Карточка-3"; 
const cardIndexToRemove = cards.indexOf(cardToRemove);
if(cardIndexToRemove !== -1){
	cards.splice(cardIndexToRemove, 1)
}
console.log("Картки: ",cards);

const cardToInsert = "Карточка-6"; 
const cardIndexToInsert = 2;
cards.splice(cardIndexToInsert, 0, cardToInsert);
console.log("Картки: ",cards);

const cardToUpdate = "Карточка-4";

