const mod = require("./custom_module/module")

mod.add_Customer("Вася зі Сеньківки", 32);
mod.add_Customer("Петро Іванович", 45);
mod.add_Customer("Роман Владиславович", 26);

mod.get_Customers_List();

console.log("Видалення замовника: Вася зі Сеньківки");
mod.remove_Customer("Вася зі Сеньківки", 32);

mod.get_Customers_List();

mod.edit_Customer("Петро Іванович", 45, "Іван Петрович", 54);

mod.get_Customers_List();

let cust1 = mod.find_Customer("Петро Іванович", 45);
console.log(`Пошук замовника Петра Івановича: ${cust1 !== -1 ? "знайдено" : "не знайдено"}`);
let cust2 = mod.find_Customer("Іван Петрович", 54);
console.log(`Пошук замовника Петра Івановича: ${cust2 !== -1 ? "знайдено" : "не знайдено"}`);
// // Список лікарень
// mod.get_Hospitals_List();

// // Зміна лікарень
// console.log("Зміна лікарні: Hospital_3");
// mod.edit_Hospital("Hospital_3", "Test address 3", "New hospital name", "New address");

// // Список лікарень
// mod.get_Hospitals_List();

// // Пошук лікарень
// let hosp1 = mod.find_Hospital("Hospital_1", "Test address 1");
// console.log(`Пошук лікарні Hospital_1: ${hosp1 !== -1 ? "знайдено" : "не знайдено"}`);
// let hosp2 = mod.find_Hospital("Hospital_7", "Test address 7");
// console.log(`Пошук лікарні Hospital_7: ${hosp2 !== -1 ? "знайдено" : "не знайдено"}`);