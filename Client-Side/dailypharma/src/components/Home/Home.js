import React from 'react'
import Banner from '../Banner/Banner'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Medicines from '../Medicines/Medicines'
import NavBar from '../NavBar/NavBar'
import Partners from '../Partners/Partners'
import Pricing from '../Pricing/Pricing'

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Partners></Partners>
      <Medicines></Medicines>
      <Features></Features>
      <Pricing></Pricing>
      <Footer></Footer>
    </>
  )
}

export default Home
