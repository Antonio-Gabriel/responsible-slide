import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './App.scss'

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper"
          >
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <div></div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum, reiciendis!
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default App
