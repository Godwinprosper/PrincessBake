import { Header } from '../../components/Header'
import { ShopTop } from './ShopTop'
import { ProductSection } from '../../components/product/ProductSection'
import { NextPage } from './NextPage'
import {productData} from '../../Data/allproduct' /*imported all data*/ 
import {Footer} from '../../components/Footer'
import './ShopPage.css'

export function ShopPage(){

  return(
    <>
      <Header/>
      <ShopTop/>
      <ProductSection productData={productData}/>
      <NextPage/>
      <Footer/>
    </>
  )
}