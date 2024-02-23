import './App.css';
import MenuItem from './components/MenuItem';
import BrandSection from './components/BrandSection';
import MottoSection from './components/MottoSection';
import Footer from './components/Footer';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

const brandInfo = {
  name: 'Yoshi Bytes',
  logoName: 'brand-logo.png',
}

const brandMottos = {
  motto1: 'Console Your Tastebuds With Japanese Cuisine',
  motto2: 'Every Byte is a Delight!',
}

function App() {
  const [itemCounts, setItemCounts] = useState(() => {
    return Array(menuItems.length).fill(0)
  })

  function getItemCount(id) {
    return itemCounts[id - 1]
  }

  function incrementItemCount(id, increment) {
    const newItemCounts = [...itemCounts]
    newItemCounts[id - 1] = Math.max(0, itemCounts[id - 1] + increment)
    setItemCounts(newItemCounts)
  }

  function getSubtotal() {
    var subtotal = 0
    itemCounts.map((itemCount, index) => {
      subtotal += itemCount * menuItems[index].price
    })
    return subtotal
  }

  function clearItemCounts() {
    setItemCounts(Array(menuItems.length).fill(0))
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col d-flex flex-column align-items-center p-0'>

          <BrandSection object = {brandInfo}/>

          <MottoSection object = {brandMottos}/>

          <div className='row' id='items-row'>
            <div className='col'>
              {menuItems.map((menuItem) => (
                <MenuItem 
                  menuItemData = {menuItem}
                  getItemCountFunc = {getItemCount}
                  incrementItemCountFunc = {incrementItemCount}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer
        getSubtotalFunc = {getSubtotal}
        clearItemCountsFunc = {clearItemCounts}
      />

    </div>
  );
}

export default App;
