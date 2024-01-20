import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Pages/Home/Banner'
import Category from './Pages/Home/Category'
import Products from './Pages/Home/Products'
import CollectionBanner from './Pages/Home/CollectionBanner'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Category />
      <CollectionBanner />
      <Products />
      <Footer />
    </div>
  )
}

export default App
