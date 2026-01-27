import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import rating from '../assets/images/rating/rating-45.png'
import profilePic from '../assets/images/amina.jpg'

import './Testimonial.css'

export function Testimonial() {

  return (
    <div className="Testimonial-section">
      <div className="testimonial-title">
        <span>Testimonial</span>
        <h2>Our Client say</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}


        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="testimonial-card">
            <div className="card-top">
              <div className='client-container'>

                <div className='profile-container'>
                  <img src={profilePic} alt="" />
                </div>

                <div className="clent-detail">
                  <h5>Kerry D.silva</h5>
                  <span>London</span>
                </div>

              </div>

              <div className='rating-container'>
                <img src={rating} alt="" />
              </div>

            </div>

            <div className="card-bottom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, error temporibus laudantium tempora iste maiores voluptates perferendis culpa neque nihil aliquam quos, vel blanditiis.</p>
            </div>
          </div>


        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <div className="card-top">
              <div className='client-container'>

                <div className='profile-container'>
                  <img src={profilePic} alt="" />
                </div>

                <div className="clent-detail">
                  <h5>Kerry D.silva</h5>
                  <span>London</span>
                </div>

              </div>

              <div className='rating-container'>
                <img src={rating} alt="" />
              </div>

            </div>

            <div className="card-bottom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, error temporibus laudantium tempora iste maiores voluptates perferendis culpa neque nihil aliquam quos, vel blanditiis.</p>
            </div>
          </div>


        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <div className="card-top">
              <div className='client-container'>

                <div className='profile-container'>
                  <img src={profilePic} alt="" />
                </div>

                <div className="clent-detail">
                  <h5>Kerry D.silva</h5>
                  <span>London</span>
                </div>

              </div>

              <div className='rating-container'>
                <img src={rating} alt="" />
              </div>

            </div>

            <div className="card-bottom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, error temporibus laudantium tempora iste maiores voluptates perferendis culpa neque nihil aliquam quos, vel blanditiis.</p>
            </div>
          </div>


        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <div className="card-top">
              <div className='client-container'>

                <div className='profile-container'>
                  <img src={profilePic} alt="" />
                </div>

                <div className="clent-detail">
                  <h5>Kerry D.silva</h5>
                  <span>London</span>
                </div>

              </div>

              <div className='rating-container'>
                <img src={rating} alt="" />
              </div>

            </div>

            <div className="card-bottom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, error temporibus laudantium tempora iste maiores voluptates perferendis culpa neque nihil aliquam quos, vel blanditiis.</p>
            </div>
          </div>


        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-card">
            <div className="card-top">
              <div className='client-container'>

                <div className='profile-container'>
                  <img src={profilePic} alt="" />
                </div>

                <div className="clent-detail">
                  <h5>Kerry D.silva</h5>
                  <span>London</span>
                </div>

              </div>

              <div className='rating-container'>
                <img src={rating} alt="" />
              </div>

            </div>

            <div className="card-bottom">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure, error temporibus laudantium tempora iste maiores voluptates perferendis culpa neque nihil aliquam quos, vel blanditiis.</p>
            </div>
          </div>


        </SwiperSlide>
      </Swiper>
    </div>
  )
}