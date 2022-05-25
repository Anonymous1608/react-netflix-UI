import React from 'react'
import "./watch.scss";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Watch = () => {
  return (
    <div className="watch">
        <div className="backBtn">
            <ArrowBackIcon />
            Home
        </div>
        <video className="video" autoplay progress controls src= {process.env.PUBLIC_URL + "/video/My Video.mp4"} />
    </div>
  )
}

export default Watch;