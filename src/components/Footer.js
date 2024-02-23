import React from 'react';

const Footer = ({getSubtotalFunc, clearItemCountsFunc}) => {
  return (
    <div className='row d-flex align-items-center' id='footer'>
      <div className='col-auto' id='subtotal-col'>
        Subtotal ${getSubtotalFunc()}
      </div>
      <div className='col d-flex justify-content-end'>
        <button className='footer-button' type='button'>
          Order
        </button>
        <button className='footer-button' type='button' onClick={() => {clearItemCountsFunc()}}>
          Clear All
        </button>
      </div>
    </div>
  )
}

export default Footer;