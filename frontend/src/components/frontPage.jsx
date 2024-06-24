import React from 'react'
import '../styles/frontPage.css';

function FrontPage() {
    return (
        <div className='entire-page'>
      <div className='left-side'>
          Recommend Phones
          <p className='info'>
            some info about the site
          </p>
      </div>
      <div className='right-side'>
          <div className='mobile'>
              <p className='price'>
                Price
              </p>
          </div>
      </div>
    </div>
    )
}


export default FrontPage
