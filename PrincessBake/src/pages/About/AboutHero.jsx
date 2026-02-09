import './AboutHero.css'

import thumb from '../../assets/images/class-cake.jpg'
import cakeVideo from '../../assets/video/video.mp4'

export function AboutHero() {
  return (
    <div className="about-hero-section">
      <div className="about-hero-content">

        <div className="top">
          <h2>About Us</h2>

          <div>
            <a href="#">Home</a>
            <span>About</span>
          </div>
        </div>

        <div className='video-container'>

          <video  controls poster={thumb}>
            <source src={cakeVideo} type="video/mp4" />
          </video>

        </div>

      </div>
    </div>
  )
}