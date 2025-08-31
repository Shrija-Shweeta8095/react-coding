import React, { useState } from 'react'

function Carousel() {
 const slides = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFK7RrzYsQPKoTOyQoGVUq2S714Vv-l6aVecsoaFRLw8ooSy0&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNVnSmc1NA1nDSwwGnx0iCVK4n_Vj0TuqlMv0Jbg-zP2uhO8&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn1-5_zUrzKdb_PD4Vk2znm-lxw3H7aoJw1zjBklvpXVbQSg&s",
  ];

  const [index,setIndex] =useState(0);

  
    const prevSlide=()=>{
         setIndex((prev)=>(prev-1+slides.length)%slides.length)
    }
    const nextSlide=()=>{
       
        setIndex((prev)=>(prev+1)%slides.length)
    }
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "400px",
          height: "250px",
          margin: "auto",
          overflow: "hidden",
          border: "2px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <img
          src={slides[index]}
          alt={`Slide ${index + 1}`}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={prevSlide}>⟨ Prev</button>
        <button onClick={nextSlide} style={{ marginLeft: "10px" }}>
          Next ⟩
        </button>
      </div>
    </div>
  )
}

export default Carousel
