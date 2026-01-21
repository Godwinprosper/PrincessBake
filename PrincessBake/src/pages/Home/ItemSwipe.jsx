import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import donot from '../../assets/icons/donot.svg'
import cupcake from '../../assets/icons/cupcake1.svg'
import pie from '../../assets/icons/pie.svg'
import cake from '../../assets/icons/cake.svg'
import rolls from '../../assets/icons/rolls.svg'

import './ItemSwipe.css'

export function ItemSwipe(){

  return(
    <div className="item-swipe-section">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{clickable:true}}
        navigation
        breakpoints={{
          480:{
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3,
          },
          991:{
            slidesPerView: 4,
          },
          1025:{
            slidesPerView: 3,
          },
          1199:{
            slidesPerView: 4,
          },
          // 1500:{
          //   slidesPerView: 5,
          // }

        }}
      >
        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={pie} alt="donot"/>
            </div>

            <h5>Pie</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={cake} alt="donot"/>
            </div>

            <h5>Cake</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={donot} alt="donot"/>
            </div>

            <h5>Donot</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={cupcake} alt="donot"/>
            </div>

            <h5>CupCake</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={rolls} alt="donot"/>
            </div>

            <h5>Rolls</h5>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="categories-item-icon">
            <div className='categories-icon-ctn'>
              <img src={donot} alt="donot"/>
            </div>

            <h5>Cake</h5>
          </div>
        </SwiperSlide>


      </Swiper>
    </div>
  )
}