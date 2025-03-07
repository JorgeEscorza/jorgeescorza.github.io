import React from 'react'
import video from "../assets/videos/blackhole.mp4";

const HeaderVideo = () => {
  return (
    <div class="headerVideo-box">
        <video loop autoPlay muted playsInline src={video} type="video/mp4"></video>
    </div>
  )
}

export default HeaderVideo