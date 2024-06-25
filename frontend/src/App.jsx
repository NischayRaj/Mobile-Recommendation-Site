import { useState } from 'react'
import FrontPage from './components/frontPage'
// import CustomSlider from './components/customSlider'
import Prices from './components/prices'
function App() {

  return (
    <div className='main-page'>
      <FrontPage/>
      {/* <CustomSlider/> */}
      <Prices/>
    </div>
  )
}

export default App
