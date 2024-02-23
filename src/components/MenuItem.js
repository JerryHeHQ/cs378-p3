import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ object }) => {
  return (
    <div className='row item-row'>
      <div className='col-auto p-0'>
        <img src={"images/" + object.imageName} className='item-picture-img'></img>
      </div>
      <div className='col item-info-col'>
        <div className='row'>
          <div className='col item-name-col'>
            {object.title}
          </div>
        </div>
        <div className='row'>
          <div className='col item-description-col'>
            {object.description}
          </div>
        </div>
        <div className='row'>
          <div className='col item-price-col'>
            {"$" + object.price}
          </div>
          <div className='col d-flex justify-content-end item-add-col'>
            <button className='item-add-button' type='button'>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default MenuItem;
