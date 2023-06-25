import React from 'react'
import './HeaderSlider.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import imageByIndex from './imageByIndex'





export const HeaderSlider = () => {

  const OPTIONS = { loop: true }
const SLIDE_COUNT = 3
const slides = Array.from(Array(SLIDE_COUNT).keys())
// const [emblaRef] = useEmblaCarousel(OPTIONS)
const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])       //Autoplay

return (
  <div className='sandbox'>
  <div className='sandbox__carousel'> 
    <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__number">
              <span>{index + 1}</span>
            </div>
            <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
          </div>
        ))}
      </div>
    </div>
  </div>
  </div>
  </div>
)
}

// import React from 'react'
// import './HeaderSlider.css'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'

// export const HeaderSlider = () => {
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide"><img src='/image/test1.jpg'/></div>
//         <div className="embla__slide"><img src='/image/test2.jpg'/></div>
//         <div className="embla__slide">Slider 3</div>
//       </div>
//     </div>
//   )
// }

