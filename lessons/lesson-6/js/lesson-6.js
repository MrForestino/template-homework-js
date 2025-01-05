console.log('Lesson-6 JS')
document.getElementById("startScript").addEventListener('click', function(){
	console.log("----------------------------");

	let i = 1;
	while(i <= 10){
		console.log(`Число [${i}]:`,i);
		i++;
	}
	console.log("----------------------------");

	for (let double = 2; double <= 20; double++){
		if(double % 2 !== 0) continue;
		console.log(`Число [${double}]:`,double);
	}
	console.log("----------------------------");

	for(let seven = 1; seven <= 10; seven++){
		console.log(`7×${seven} = ${7 * seven}`);
	}
	console.log("----------------------------");

	const arr = [1, 2 ,3 ,4 ,5];
	let j = 0;
	while( j < arr.length){
		console.log(`Масив[${arr[j]}]`);
		j ++;
	}
	console.log("----------------------------");

	const arr2 = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
	for(let o = 0; o < arr2.length; o++){
	if(arr2[o] === 7) break;
	console.log(`Масив[${arr2[o]}]`);
	}
	console.log("----------------------------");

	const n = 10;
	let c = 1;
	while (true){
		if(c >= n) break;
		console.log("Число n:", c);
		c++;
	}
	console.log("----------------------------");
	let q = 1
	while (q <= 20) {
		if (q % 3 === 0) {
			q++
			continue
		}
		console.log(`[${q}]`)
		q++
	}
	
});
