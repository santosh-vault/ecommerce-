import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Pages/Home/Banner'
import Category from './Pages/Home/Category'
import Products from './Pages/Home/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <Products />
    </div>
  )
}

export default App
