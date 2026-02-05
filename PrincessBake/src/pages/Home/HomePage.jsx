import { AboutCake } from '../../components/AboutCake'
import { Header } from '../../components/Header'
import { HeroSection } from './HeroSection'
import { ItemSwipe } from './itemSwipe'
import { ProductSection } from '../../components/product/ProductSection'
import { ClassCake } from './ClassCake'
import { OurTeam } from '../../components/OurTeam'
import { Testimonial } from '../../components/Testimonial'
import { FollowUs } from '../../components/FollowUs'
import { LocationMap } from '../../components/LocationMap'
import { Footer } from '../../components/Footer'
import './HomePage.css'

export function HomePage(){
  return(
    <>
      <Header/>
      <HeroSection/>
      <AboutCake/>
      <ItemSwipe/>
      <ProductSection/>
      <ClassCake/>
      <OurTeam/>
      <Testimonial/>
      <FollowUs/>
      <LocationMap/>
      <Footer/>
    </>
  )
}