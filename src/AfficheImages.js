import React, { useState } from 'react'
import './AfficheImages.css'
import img_1 from './images/image-product-1.jpg'
import img_2 from './images/image-product-2.jpg'
import img_3 from './images/image-product-3.jpg'
import img_4 from './images/image-product-4.jpg'
import img_next from './images/icon-next.svg'
import img_previous from './images/icon-previous.svg'

function AfficheImages() {
  const images=[img_1,img_2,img_3,img_4]
  const [chosenImage,setChosenImage] = useState(img_1)
  function prevImage(){
    const currentIndex = images.findIndex(image => image === chosenImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setChosenImage(images[prevIndex]);
  }
  function nextImage(){
    const currentIndex = images.findIndex(image => image === chosenImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setChosenImage(images[nextIndex]);
  }
  return (
    <section className='section-images'>
      <img className='big_img' src={chosenImage} alt="chosen product" />
      <div className='btn btn-prev' onClick={prevImage}>
        <img src={img_previous} alt="previous" />
      </div>
      <div className='btn btn-next' onClick={nextImage}>
        <img src={img_next} alt="next" />
      </div>
      {images.map((image, index) => (
            <img
                key={index} // Use index as the key for each image
                src={image}
                alt={`Product ${index + 1}`} // Provide an appropriate alt text
                className={`small_img ${chosenImage === image ? 'active' : ''}`} // Conditionally add the active class
                onClick={() => setChosenImage(image)} // Set the chosen image when clicked
            />
        ))}
    </section>
  )
}

export default AfficheImages