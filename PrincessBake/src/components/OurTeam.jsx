import amaka from '../assets/images/team-1.jpg'
import './OurTeam.css'

export function OurTeam(){

  return(
    <div className="our-team-section">

      <div className='top-section'>

        <div className="top-right">
          <span>OUR team</span>
          <h2>Sweet Baker</h2>
        </div>

        <div className="top-left">
          <button className='join-btn'>Join Us</button>
        </div>

      </div>
      
      <div className='bottom-section'>
        <div className="image-container">
          <img src={amaka} alt="image" />
          <div className='baker-detail'>
            <h6>Randy Butler</h6>
            <span>Decorater</span>
          </div>
        </div>

        <div className="image-container">
          <img src={amaka} alt="image" />
          <div className='baker-detail'>
            <h6>Randy Butler</h6>
            <span>Decorater</span>
          </div>
        </div>

        <div className="image-container">
          <img src={amaka} alt="image" />
          <div className='baker-detail'>
            <h6>Randy Butler</h6>
            <span>Decorater</span>
          </div>
        </div>

        <div className="image-container">
          <img src={amaka} alt="image" />
          <div className='baker-detail'>
            <h6>Randy Butler</h6>
            <span>Decorater</span>
          </div>
        </div>
      </div>
    </div>
  )

}