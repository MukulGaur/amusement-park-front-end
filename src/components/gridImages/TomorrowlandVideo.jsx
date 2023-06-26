import React from 'react'
import './gridImages.css'

const TomorrowlandVideo = () => {

  return (
    <>
    <h1 className="text-center my-5"> Checkout Tomorrowland </h1>
    <div className='video-container mb-5'>
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/4a-WM6ab8Tk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
    </div>
    </>
  )
}

export default TomorrowlandVideo