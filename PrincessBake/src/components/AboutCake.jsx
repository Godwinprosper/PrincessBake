import './AboutCake.css'

export function AboutCake() {
  return (
    <div className="about-cake">
      <div className='about-cake-grid'>


        <div className='about-cake-grid-left'>
          <div>
            <span>About Cake shop</span>
            <h2>
              Cakes and bakes from the house of Queens!
            </h2>
          </div>
          <p>
            The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.
          </p>
        </div>

        <div className='about-cake-grid-right'>

          <div className="skill-item">
            <div className="skill-header">
              <span className="skill-label">CAKE DESIGN</span>
              <span className="skill-percentage">95%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header class-skill">
              <span className="skill-label class-skill">CAKE CLASS</span>
              <span className="skill-percentage">80%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill class-skill" ></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header recipes-skill">
              <span className="skill-label ">CAKE RECIPES</span>
              <span className="skill-percentage">90%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill recipes-skill" ></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}