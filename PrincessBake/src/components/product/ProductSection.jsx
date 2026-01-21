import {Product} from './product'
import {productData} from '../../Data/product'
import './ProductSection.css'


export function ProductSection(){

  return(
    <div className="product-section">
      <div className="product-grid">

        {
          productData.map((product)=>{
            return(
              <Product key={product.id} product={product} />
            )
          })
        }

      </div>
    </div>
  )
}