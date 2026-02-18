import { useState } from "react"
import { SubTitle } from "../../components/Subtitle"
import './ShopTop.css'
export function ShopTop(){
  const [dropdown, setDropdown] = useState(false)

  const displayDropdwon = ()=>{
    setDropdown(true);
  }

  return(
    <div className="Shop-top">
      <SubTitle title={'Shop'}/>

      <div className="search-section">

        <div className="Option-section">
          <div className="Option" onClick={displayDropdwon}>Cartegory</div>
          <div className={`dropdown-content ${dropdown ? 'show' : ''}`} >
            <div>cup-cake</div>
            <div>cup-cake</div>
            <div>cup-cake</div>
            <div>cup-cake</div>
          </div>
        </div>

        <input type="text" />

        <div className="search-icon">search</div>
      </div>
    </div>
  )
}