var prompt = require('prompt-sync')();
const menuItems = [
   ['waffles', 'waffles'],
   ['pancakes', 'pancakes'],
   ['icecream', 'icecream'],
];
const menu = Object.fromEntries(menuItems);
console.log(`Welcome to Sean Waffles and Creams. This is our Menu:\n${Object.keys(menu)} \n \n`);

const order = (menuItem) => {
   return new Promise((res, rej) => {
      menuItem = prompt("What do you want to order?: ").toLowerCase()
      if (menu[menuItem]){
         console.log(`${menuItem} was ordered`)
         res(menuItem)
      }else{
         rej(`${menuItem} was not on menu`)
      }
   })
};


order().then(menuItem=>{
   setTimeout(()=>{
      console.log(`${menuItem} is being prepared`)
   },2000);
   setTimeout(()=>{
      console.log(`${menuItem} is now Ready!!!!`)
   },7000);
   setTimeout(()=>console.log(`${menuItem} has been served Enjoy!!`),8000)
})

.catch(err=>{console.log(err)})

.finally(setTimeout(()=>console.log("Have a good day come back next time"),9000))









