import { Header } from "../../components/Header"
import { AboutHero } from "./AboutHero"
import {AboutCake} from "../../components/AboutCake"
import {Testimonial} from "../../components/Testimonial"
import {OurTeam} from  "../../components/OurTeam"
import {Footer} from "../../components/Footer"

export function AboutPage(){
  return(
    <>
      <Header/>
      <AboutHero/>
      <AboutCake/>
      <Testimonial/>
      <OurTeam/>
      <Footer/>
    </>
  )
}
