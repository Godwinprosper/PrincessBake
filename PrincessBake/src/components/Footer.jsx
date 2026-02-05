import logo from '../assets/logo/logo.svg'
import './footer.css'

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="footer-content-container">

          <div className='footer-content footer-left-content'>
            <h6>WORKING HOURS</h6>
            <ul>
              <li>Monday - Friday: 08:00 am – 08:30 pm</li>
              <li>Saturday: 10:00 am – 16:30 pm</li>
            </ul>
          </div>

          <div className='footer-content footer-middle-content'>
            <div className='logo-container'>
              <div className="logo-img-container">
                <img src={logo} alt="" />
              </div>
              <span>Princess Bakes</span>
            </div>

            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
          </div>

          <div className='footer-content footer-right-content'>
            <div className="footer-right-content-wrapper">


              <h6>Subscribe </h6>

              <p>Get latest updates and offers.</p>

              <form className='footer-input-container'>
                <input type="email" placeholder='Email' />

                <button className="submit-email-button">
                  <img src={logo} alt="" />
                </button>

              </form>

            </div>

          </div>

        </div>
      </div>


      <div className="footer-bottom">
        <div className='copyright'>
          <div className="right">
            Copyright ©2026 All rights reserved | This Website is design by Prosper
          </div>
          <div className="left">
            <div><a href="#">Privacy Policy</a></div>
            <div><a href="#">Terms & Conditions</a></div>
            <div><a href="#">Site Map</a></div>
          </div>
        </div>
      </div>

    </footer>
  )
}