class Customer {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		if (typeof name === "undefined") {
			this.name = "Невідомий замовник";
		}
	}
}

global_customers_list = new Array();

export function find_Customer(name, age) {
	for (let customer of global_customers_list) {
		if (customer.name === name &&
				customer.age === age) { return customer; }
	}

	return -1;
}

export function add_Customer(name, age) {
	let customer = Customer(name, age);
	global_customers_list.push(customer);

	return customer;
}

function remove_Hospital(name, age) {

	for (let i = 0; i < global_customers_list.length; i++) {
			let customer = global_customers_list[i];
			if (customer.name === name &&
					customer.age === age) { global_customers_list.splice(i, 1);
																	return 1; }
	}

	return -1;

}

export function edit_Customer(name, age, new_name, new_age) {
	for (let i = 0; i < array.length; i++) {
		let customer = global_customers_list[i];
		if (customer.name === name &&
				customer.age === age) { global_customers_list[i].name = new_name;
																global_customers_list[i].age = new_age;
				 												return 1; }
	}

	return -1;
}

export function get_Hospitals_List() {

	console.log("\n" + "Список усіх замовників:");

	for (let i = 0; i < global_customers_list.length; i++) {
		let customer = global_customers_list[i];
		console.log(`Ім'я замовника: ${customer.name}, вік замовника: ${customer.age}`);
	}

	console.log();
	
	return global_customers_list;

}