var LavendarSoap = document.getElementById("Lavendar Soap");
var TeatreeOil = document.getElementById("Teatree Oil");
var HoneyCrispApple = document.getElementById("Honeycrisp Apples");
var Avocado = document.getElementById("Avocado");
var PeanutButter = document.getElementById("Peanut Butter");
var AlmondMilk = document.getElementById("Almond Milk");
var Bananas = document.getElementById("Bananas");
var Tomato = document.getElementById("Tomato");
var Mushrooms = document.getElementById("Mushrooms");
var potato = document.getElementById("Potato");
var Rice = document.getElementById("Rice");
var Bacon = document.getElementById("Bacon");
var Chicken = document.getElementById("Chicken");
var Eggplant = document.getElementById("Eggplant");
var BananaNutCrunch = document.getElementById("Banana Nut Crunch");

var shoppingCart = [];

function printList() {

//	bill.textContent = "hello";
	var wholeBill = "";
	for (var i = 0; i < shoppingCart.length; i++) {
		wholeBill += shoppingCart[i].name + "\n";
	}
	bill.textContent = wholeBill;
	
}


LavendarSoap.onclick = function() {
	var LavendarSoaps = {
		name : "Lavendar Soap",
		price : 7.99,
	}
	shoppingCart.push(LavendarSoap);
	printList();
}
TeatreeOil.onclick = function() {
	var TeatreeOils = {
		name : "Teatree Oil",
		price : 9.99,
	}
	shoppingCart.push(TeatreeOil);
	printList();
}

HoneyCrispApple.onclick = function() {
	var HoneyCrispApples = {
		name : "HoneyCrisp Apples",
		price : 12.99,
	}
	shoppingCart.push(HoneyCrispApple);
	printList();
}

Avocado.onclick = function() {
	var Avocadoes = {
		name : "Avocado",
		price : 4.99,
	}
	shoppingCart.push(Avocado);
	printList();
}

PeanutButter.onclick = function() {
	var PeanutButters = {
		name : "Peanut Butter",
		price : 9.99,
	}
	shoppingCart.push(PeanutButter);
	printList();
}

AlmondMilk.onclick = function() {
	var AlmondMilks = {
		name : "Almond Milk",
		price : 5.99,
	}
	shoppingCart.push(AlmondMilk);
	printList();
}

Bananas.onclick = function() {
	var Bananass = {
		name : "Bananas",
		price : 6.99,
	}
	shoppingCart.push(Bananas);
	printList();
}

Tomato.onclick = function() {
	var Tomatoes = {
		name : "Tomato",
		price : 2.99,
	}
	shoppingCart.push(Tomato);
	printList();
}

Mushrooms.onclick = function() {
	var Mushroomss = {
		name : "Mushrooms",
		price : 3.99,
	}
	shoppingCart.push(Mushrooms);
	printList();
}

potato.onclick = function() {
	var potatoes = {
		name : "potato",
		price : 1.99,
	}
	shoppingCart.push(potato);
	printList();
}

Rice.onclick = function() {
	var Rices = {
		name : "Rice",
		price : 8.99,
	}
	shoppingCart.push(Rice);
	printList();
}

Bacon.onclick = function() {
	var Bacons = {
		name : "Bacon",
		price : 39.99,
	}
	shoppingCart.push(Bacon);
	printList();
}
Chicken.onclick = function() {
	var Chickens = {
		name : "Chicken",
		price : 69.99,
	}
	shoppingCart.push(Chicken);
	printList();

	Eggplant.onclick = function() {
		var Eggplants = {
			name : "Eggplant",
			price : 7.99,
		}
		shoppingCart.push(Eggplant);
		printList();
	}

	BananaNutCrunch.onclick = function() {
		var BananaNutCrunchs = {
			name : "Banana Nut Crunch",
			price : .99,
		}
		shoppingCart.push(BananaNutCrunch);
		printList();
	}
}