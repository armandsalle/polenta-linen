import type { Photo } from '@/lib/shared/types/photo'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'

import ResponsiveImage from '@/components/atoms/ResponsiveImage'

SwiperCore.use([Pagination])

type RecipeSliderType = {
  images: Photo[]
}

const RecipeSlider = ({ images }: RecipeSliderType): JSX.Element => {
  return (
    <Swiper spaceBetween={0} slidesPerView={1} pagination={true}>
      {images.map((el, i) => (
        <SwiperSlide key={i}>
          <ResponsiveImage
            src={el.url}
            alt={el.title}
            className="recipe__slider__image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default RecipeSlider
