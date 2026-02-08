import instagramPics1 from '../assets/images/instagram/instagram-1.jpg'
import instagramPics2 from '../assets/images/instagram/instagram-2.jpg'
import instagramPics4 from '../assets/images/instagram/instagram-4.jpg'
import instagramPics3 from '../assets/images/instagram/instagram-3.jpg'
import instagramPics5 from '../assets/images/instagram/instagram-5.jpg'
import instagramPics6 from '../assets/images/instagram/product-3.jpg'
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
              <img src={instagramPics1} alt="" />
            </div>
            <div className="instagram-pics middle-pics">
              <img src={instagramPics2} alt="" />
            </div>
            <div className="instagram-pics">
              <img src={instagramPics3} alt="" />
            </div>

            <div className="instagram-pics">
              <img src={instagramPics4} alt="" />
            </div>
            <div className="instagram-pics middle-pics">
              <img src={instagramPics5} alt="" />
            </div>
            <div className="instagram-pics">
              <img src={instagramPics6} alt="" />
            </div>

            

          </div>

        </div>

    </div>
  )
}