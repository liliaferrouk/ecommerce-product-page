import React, { useEffect, useState } from 'react'
import './AfficheImages.css'
import img_1 from './images/image-product-1.jpg'
import img_2 from './images/image-product-2.jpg'
import img_3 from './images/image-product-3.jpg'
import img_4 from './images/image-product-4.jpg'
import img_next from './images/icon-next.svg'
import img_previous from './images/icon-previous.svg'
import img_exit from './images/icon-close.svg'

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

  const [canPopImage, setCanPopImage] = useState(window.innerWidth > 850);
  const handleResize = () => {setCanPopImage(window.innerWidth > 850);};
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);
  const[imagePoped,setImagePoped] = useState(false)
  function popImage(){
    setImagePoped(true)
  }
  function dePopImage(){
    setImagePoped(false)
  }
  return (
    <section className='section-images'>
      <img className='big_img' src={chosenImage} onClick={canPopImage ? popImage : ()=>{}} alt="chosen product" />
      <div className='btn btn-prev' onClick={prevImage}>
        <img src={img_previous} alt="previous" />
      </div>
      <div className='btn btn-next' onClick={nextImage}>
        <img src={img_next} alt="next" />
      </div>
      {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={`small_img ${chosenImage === image ? 'active' : ''}`}
                onClick={() => setChosenImage(image)}
            />
        ))}

        {
          imagePoped
          &&
          <div className="popupSpace">
            <div className="popup">
              <div className="exit-popup-img"  onClick={dePopImage}>
                <img src={img_exit}  alt="exit popup mode" />
              </div>
              <div className="gridpopup">
                <img className='big_img' src={chosenImage} onClick={canPopImage && popImage} alt="chosen product" />
                {images.map((image, index) => (
                      <img
                          key={index} // Use index as the key for each image
                          src={image}
                          alt={`Product ${index + 1}`} // Provide an appropriate alt text
                          className={`small_img ${chosenImage === image ? 'active' : ''}`} // Conditionally add the active class
                          onClick={() => setChosenImage(image)} // Set the chosen image when clicked
                      />
                  ))}
              </div>

              <div className='btn-prev-pop btn-pop' onClick={prevImage}>
                <img src={img_previous} alt="previous" />
              </div>
              <div className='btn-next-pop btn-pop' onClick={nextImage}>
                <img src={img_next} alt="next" />
              </div>

            </div>
          </div>
        }
    </section>
  )
}

export default AfficheImages