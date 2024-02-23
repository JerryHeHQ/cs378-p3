import React from 'react';

const MottoSection = ({ object }) => {
  return (
    <div className='row' id='mottos-row'>
      <div className='col'>
        <div className='row'>
          <div className='col' id='motto-1-col'>
            {object.motto1}
          </div>
        </div>
        <div className='row'>
          <div className='col' id='motto-2-col'>
          {object.motto2}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MottoSection;