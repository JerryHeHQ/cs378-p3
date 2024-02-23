import React from 'react';

const BrandSection = ({ object }) => {
  return (
    <div className='row' id='brand-row'>
      <div className='col-auto p-0'>
        <img src={object.logoName} id='brand-logo-img'></img>
      </div>
      <div className='col' id='brand-name-col'>
        {object.name}
      </div>
    </div>
  )
}

export default BrandSection;