import instagramPics from '../assets/images/instagram/instagram-1.jpg'
import './followUs.css'

export function FollowUs(){

  return(
    <div className="followUs-section">

        <div className="sub-container">


        
      
          <div className="left-content">
            <span>Follow us on instagram</span>
            <h2>Sweet moments are saved as memories.</h2>
            <h5>
              @PrincessBake.
            </h5>
          </div>

          <div className="right-content">

            <div className="instagram-pics">
              <img src={instagramPics} alt="" />
            </div>
            <div className="instagram-pics middle-pics">
              <img src={instagramPics} alt="" />
            </div>
            <div className="instagram-pics">
              <img src={instagramPics} alt="" />
            </div>

            <div className="instagram-pics">
              <img src={instagramPics} alt="" />
            </div>
            <div className="instagram-pics middle-pics">
              <img src={instagramPics} alt="" />
            </div>
            <div className="instagram-pics">
              <img src={instagramPics} alt="" />
            </div>

            

          </div>

        </div>

    </div>
  )
}