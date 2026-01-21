import { formatMoney } from '../../utils/money'
import './product.css'

export function Product({product}) {

  return (
    
    <div className='product-card'>
      <div className="product-img-container">
        <img src={product.image} alt="" />
      </div>

      <div className='product-details'>
        <span>{product.category}</span>
        <div className='prodct-name'>{product.name}</div>
        <div className='prodct-price'>{formatMoney(product.priceCent)}</div>
      </div>

      <div className='add-to-cart'>
        <span>Add to Cart</span>
      </div>
    </div>
  )

}