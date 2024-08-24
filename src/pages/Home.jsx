import React from 'react'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Slider1 from '../Components/Slider1'
import Categories from '../Components/Categories'
import Products from '../Components/Product'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'




const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider1 />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
