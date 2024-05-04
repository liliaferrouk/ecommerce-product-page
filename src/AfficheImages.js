import React, { useState } from 'react'
import './AfficheImages.css'
import img_1 from './images/image-product-1.jpg'
import img_2 from './images/image-product-2.jpg'
import img_3 from './images/image-product-3.jpg'
import img_4 from './images/image-product-4.jpg'

function AfficheImages() {
  const images=[img_1,img_2,img_3,img_4]
  const [chosenImage,setChosenImage] = useState(img_1)
  return (
    <section className='section-images'>
      <img className='big_img' src={chosenImage} alt="chosen product" />
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