import React from 'react';

const PopUp = ({show, switchPopUpVisibilityFunc, title, details}) => {
  if (!show) {
    return (null)
  }

  return (
    <div className='row d-flex align-items-center justify-content-center' id='pop-up-row'>
      <div className='col-auto' id='pop-up-content'>
        <div id='pop-up-title'>
          {title}
        </div>
        <div id='pop-up-details'>
          {details}
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-start'>
            <button className='pop-up-button' type='button' onClick={() => {switchPopUpVisibilityFunc()}}>
              Cancel
            </button>
          </div>
          <div className='col d-flex justify-content-end'>
            <button className='pop-up-button' type='button' onClick={() => {switchPopUpVisibilityFunc()}}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopUp;