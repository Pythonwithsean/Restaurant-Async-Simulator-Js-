// Import the prompt-sync module
var prompt = require('prompt-sync')();

// Define the menu items as an array of arrays
const menuItems = [
   ['waffles', 'waffles'],
   ['pancakes', 'pancakes'],
   ['icecream', 'icecream'],
];

// Convert the menu items array into an object using Object.fromEntries
const menu = Object.fromEntries(menuItems);

// Display the menu to the user
console.log(`Welcome to Sean Waffles and Creams. This is our Menu:\n${Object.keys(menu)} \n \n`);

// Define the order function using a Promise
const order = () => {
   return new Promise((resolve, reject) => {
      // Prompt the user for their order
      let menuItem = prompt("What do you want to order?: ").toLowerCase();
      
      // Check if the order exists in the menu
      if (menu[menuItem]){
         console.log(`${menuItem} was ordered`);
         resolve(menuItem);
      } else{
         reject(`${menuItem} was not on the menu`);
      }
   });
};

// Call the order function
order()
   .then(menuItem => {
      // Use setTimeout to simulate the preparation time
      setTimeout(() => {
         console.log(`${menuItem} is being prepared`);
      }, 2000);

      // Use setTimeout to simulate the cooking time
      setTimeout(() => {
         console.log(`${menuItem} is now ready!!!!`);
      }, 7000);

      // Use setTimeout to simulate the serving time
      setTimeout(() => {
         console.log(`${menuItem} has been served. Enjoy!!`);
      }, 8000);
   })
   .catch(err => {
      console.log(err);
   })
   .finally(() => {
      // Use setTimeout to delay the final message
      setTimeout(() => {
         console.log("Have a good day. Come back next time!");
      }, 9000);
   });
