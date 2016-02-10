var total = 0;
var groceryList = [

	{
		name: 'apples',
		price: 2
	},
	{
		name: 'cereal',
		price: 5
	},
	{
		name: 'eggs',
		price: 3
	},
	{
		name: 'milk',
		price: 2.50
	},
	{
		name: 'cheese',
		price: 7
	},

];

for (i = 0; i < groceryList.length; i++) {
	total += groceryList[i].price;
}

/* groceryList.forEach(function(item, index, array) {
	console.log(item.name + " $" + item.price);
}); */

groceryList.forEach(function(item) {
	console.log(item.name + " $" + item.price);
});

console.log("total = $" + total);