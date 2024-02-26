// var MyArray = 
// new Array('mango', 'orange', 'apple', 'pineapple', 'strawberry', 'lime', 'melon');

// var MyArray1 = [, 'red', , 'yellow', 'blue', , 'white'];


// console.log(MyArray instanceof Array);


// var possessions = {
// 	'realEstate': {
// 		'land' : {
// 			'surface': '200 Acres',
// 			'type': 'Forest'
// 		},

// 	'estate' : {
// 		'type' : 'victorian Era',
// 		'rooms': '22'
// 	}
// },

// 'otherGoods' : {
// 	'vehicles': {
// 		'manufacturer': 'Dodge',
// 		'model': 'Charger',
// 		'color': 'Yellow'
// }
// 	}
// };	

// console.log(possessions.otherGoods.vehicles.color);

// Define the doMath function that will be triggered when the onchange event occurs
function doMath(event) {
    // Access the value entered in the age input field
    var ageValue = event.target.value;
    // Perform some calculation or manipulation with the age value
    console.log("Entered age:", ageValue);
}

// Access the age input element and assign the doMath function to its onchange event
document.forms[0].age.onchange = doMath;