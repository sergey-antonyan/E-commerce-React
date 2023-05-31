import image1 from '../imagesSliders/blackfriday.png'
import image2 from '../imagesSliders/test1.jpg'
import image3 from '../imagesSliders/test2.jpg'


export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex