import { AboutCake } from '../../components/AboutCake'
import { Header } from '../../components/Header'
import { HeroSection } from './HeroSection'
import { ItemSwipe } from './itemSwipe'
import { ProductSection } from '../../components/product/ProductSection'
import './HomePage.css'

export function HomePage(){
  return(
    <>
      <Header/>
      <HeroSection/>
      <AboutCake/>
      <ItemSwipe/>
      <ProductSection/>
    </>
  )
}