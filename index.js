// const dinner = {
//     cheeseburger: 12,
//     steak: 20,
//     soup: 8,
//     mac: 14,
//     soupSalad: 16
// }

// let total = 0;
// console.table(Object.keys(dinner));
// console.table(Object.values(dinner));

// for(i = 0; i < Object.values(dinner).length; i++) {
//     total += Object.values(dinner)[i];
// }
// console.log(total);


const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih@aol.com',
    phone: undefined,
    zipCode: '631',
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false
}

customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = 3195551234;
customer['zipCode'] = '63132';
customer['favoriteFlavors'] = ['coffee', 'strawberry', 'matcha'];

delete customer['zipCode'];
delete customer['favoriteStore'];

customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer.futureFlavors = 'mango';
customer.todaysPurchaseCost = 5.32;

console.table(Object.keys(customer));
