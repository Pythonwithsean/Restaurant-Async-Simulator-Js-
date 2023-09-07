// Import the prompt-sync module
var prompt = require('prompt-sync')();

// Define the Menu class
class Menu {
   constructor(menuItems) {
      this.menu = Object.fromEntries(menuItems);
   }

   display() {
      console.log(`Welcome to Sean Waffles and Creams. This is our Menu:\n${Object.keys(this.menu)} \n \n`);
   }

   isMenuItemExist(item) {
      const menuItem = item.toLowerCase();
      return this.menu[menuItem] ? true : false;
   }
}

// Define the Order class
class Order {
   constructor(menu) {
      this.menu = menu;
   }

   getOrder() {
      return new Promise((resolve, reject) => {
         // Prompt the user for their order
         let menuItem = prompt("What do you want to order?: ");
         if (!menuItem) {
            reject("No order entered");
         } else {
            menuItem = menuItem.toLowerCase();
            if (this.menu.isMenuItemExist(menuItem)) {
               console.log(`${menuItem} was ordered`);
               resolve(menuItem);
            } else {
               reject(`${menuItem} was not on the menu`);
            }
         }
      });
   }
}

// Define the Kitchen class
class Kitchen {
   prepareOrder(menuItem) {
      return new Promise((resolve) => {
         setTimeout(() => {
            console.log(`${menuItem} is being prepared`);
            resolve();
         }, 2000);
      });
   }

   serveOrder(menuItem) {
      return new Promise((resolve) => {
         setTimeout(() => {
            console.log(`${menuItem} is now ready!!!!`);
            resolve();
         }, 7000);
      });
   }
}

// Create instances of the classes
const menuItems = [['waffles', 'Waffles'], ['pancakes', 'Pancakes'], ['icecream', 'Ice Cream']];
const menu = new Menu(menuItems);
const order = new Order(menu);
const kitchen = new Kitchen();

// Display the menu
menu.display();

// Call the order function
(async () => {
   try {
      const menuItem = await order.getOrder();
      
      // Prepare and serve the order
      await kitchen.prepareOrder(menuItem);
      await kitchen.serveOrder(menuItem);

      setTimeout(() => {
         console.log(`${menuItem} has been served. Enjoy!!`);
      }, 8000);
   } catch (err) {
      console.log(err);
   } finally {
      setTimeout(() => {
         console.log("Have a good day. Come back next time!");
      }, 9000);
   }
})();
