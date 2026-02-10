import './SubTitle.css';

export function SubTitle({ title }) {
  return(
    <>
      <div className="top">
          <h2>{title}</h2>

          <div>
            <a href="#">Home</a>
            <span>About</span>
          </div>
        </div>

    </>
  )
}