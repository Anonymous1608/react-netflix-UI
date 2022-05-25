import React,{ useState } from 'react';
import "../styles/ListItem.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


  return (
    <div className="listItem"
    style={{left: isHovered && index * 225 -50 +index*2.5}} 
    onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)} >
        <img src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ffansided.com%2Ffiles%2F2016%2F07%2Fmr-robot-header.jpg" alt="list-item" />
        {isHovered &&(
          <>
        <video src= {trailer} autoPlay={true} loop />
        <div className="itemInfo">
          <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon  className="icon"/>
              <ThumbUpOutlinedIcon  className="icon"/>
              <ThumbDownOutlinedIcon  className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>1 hour 14 mins</span>
            <span className="limit">16+</span>
            <span>1999</span>
          </div>
          <div className="desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus, voluptatibus recusandae error tempora nisi inventore, sunt sapiente vero enim.
          </div>
          <div className="genre">Action</div>
        </div> </>
        )}
    </div>
  )
}

export default ListItem