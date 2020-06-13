/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

// Tim
// function menuMaker(arr){
//   const menu = document.createElement("div")
//   const ulList=  document.createElement("ul")

//   const button = document.querySelector(".menu-button")

//   // button.appendChild(menu)
//   menu.appendChild(ulList)
//   // ulList.appendChild(menuItem)

//   menu.classList.add("menu")
//   arr.forEach((arritem) => {
//     const menuItem = document.createElement('li')
//     menuItem.textContent = arritem
//     ulList.appendChild(menuItem)
//   })

//   button.addEventListener("click", (e) => {
//     menu.classList.toggle("menu--open")
//   })

//   return menu
// }

// const header = document.querySelector(".header")
// header.appendChild(menuMaker(menuItems))




// Damaris
// const menuButton = document.querySelector('.menu-button');
// const header = document.querySelector('.header')
// function menuMaker(arr) {
//   const menu = document.createElement('div');
//   const menuList = document.createElement('ul');
//   arr.forEach(element => {
//     const menuListItems = document.createElement('li');
//     menuListItems.textContent = element;
//     menuList.classList.add('hover');
//     menuList.appendChild(menuListItems);
//   });
//   menu.classList.add('menu');
//   menu.appendChild(menuList)
//   menuButton.addEventListener('click', (e) => {
//     menu.classList.toggle('menu--open');
//   });
//   return menu;
// }

// header.appendChild(menuMaker(menuItems))


// Kevin
function menuMaker(items){
  const menuDiv = document.createElement('div');
  const ulList = document.createElement('ul')
  const li0 = document.createElement('li');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const li5 = document.createElement('li');
  // items.forEach((i) => {
  //   const li0 = document.createElement('li');
  //   li0.textContent = i;
  //   ulList.appendChild(li0)
  //   // menuButton.appendChild(menuMaker(i.items));
  //   console.log(i);
  // });

  menuDiv.classList.add("menu")
  menuDiv.appendChild(ulList);
  // ulList.appendChild(li0);
  // ulList.appendChild(li1);
  // ulList.appendChild(li2);
  // ulList.appendChild(li3);
  // ulList.appendChild(li4);
  // ulList.appendChild(li5);
  const menuButton = document.querySelector('.menu-button');
  console.log(menuButton);
  menuButton.addEventListener('click', (e) => {
    menuDiv.classList.toggle('menu--open');
    menuButton.classList.toggle('toggle-on');
  });
  console.log(menuDiv);
  return menuDiv;
}
  menuMaker(menuItems);
const header = document.querySelector('.header');
header.appendChild(menuMaker(menuItems));



