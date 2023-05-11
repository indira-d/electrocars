import React, { useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Catalogue from '../../Components/Catalogue/Catalogue'
import Performance from '../../Components/Performance/Performance'
import Brands from '../../Components/Brands/Brands'
import Advantages from '../../Components/Advantages/Advantages'
import Indicators from '../../Components/Indicators/Indicators'
import WhyWe from '../../Components/WhyWe/WhyWe'
import Footer from '../../Components/Footer/Footer'
import { useDispatch } from 'react-redux'
import { getCars, getSliderData } from '../../redux/CarSlice'
import Slider from '../../Components/Slider/Slider'
import Testimonials from '../../Components/Testimonials/Testimonials'


const Home = () => {
  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(getCars())
   dispatch(getSliderData())
  }, [dispatch])


  return (
	<div>
	   <Header />
       <Slider />
       <Menu />
       <Catalogue />
       <Performance />
       <Brands />
       <Advantages />
       <Indicators />
       {/* <Values /> */}
       <WhyWe/>
       <Testimonials />
       <Footer/>
	</div>
  )
}

export default Home