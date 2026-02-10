import { SubTitle } from "../../components/Subtitle"

import './AboutHero.css'

import thumb from '../../assets/images/class-cake.jpg'
import cakeVideo from '../../assets/video/video.mp4'

export function AboutHero() {
  return (
    <div className="about-hero-section">
      <div className="about-hero-content">

        <SubTitle title="About Us" />

        <div className='video-container'>

          <video  controls poster={thumb}>
            <source src={cakeVideo} type="video/mp4" />
          </video>

        </div>

      </div>
    </div>
  )
}