import React from "react";
import video from "../assets/videos/galaxy.mp4";

const BackgroundVideo = () => {
    return ( // Asegúrate de retornar el JSX
        <div className="container">
            <video class="back-vid" loop autoPlay muted playsInline src={video} type="video/mp4"></video>
        </div>
    );
};

export default BackgroundVideo;
