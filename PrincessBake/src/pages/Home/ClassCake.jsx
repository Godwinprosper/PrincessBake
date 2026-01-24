import classCakeImage from '../../assets/images/class-cake.jpg'
import './ClassCake.css'

export function ClassCake(){

  return(
    <div className="class-cake-section">
      <div className="class-cake-grid">
        <div className="left-section">
          <span>CLASS CAKES</span>
          <h2>Made from your <br/> own hands</h2>

          <div className='input-container'>
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Phone'/>
            <input type="text" placeholder='Studying Class'/>
            <input type="text" placeholder='Type your requirements'/>
          </div>

          <div><button className='registration-btn'>Registration</button></div>
        </div>

        <div className="right-section">
            <img src={classCakeImage} alt="class-cake-img" />
        </div>
      </div>
      <div className="class-cake-bg">
        
          <img src={classCakeImage} alt="class-cake-img" />
      </div>
    </div>
  )
}