import React, { useRef, useState } from 'react';
import "../styles/List.scss";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from './ListItem';
const List = () => {
  const [slideNum, setSlideNum ] = useState(0);
  const [isVisible, setIsVisible ] = useState(false);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsVisible(true)
    let distance = listRef.current.getBoundingClientRect().x - 50

    if(direction === "left" && slideNum > 0){
        setSlideNum(slideNum - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    
    if(direction === "right" && slideNum < 5){
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }
  return (
    <div className="list">
        <span className="listTitle">Continue to Watch</span>
        <div className="wrapper">
            <ArrowBackIosNewIcon className="slider left" onClick= {()=> handleClick("left")}
              style ={{display:!isVisible && "none"}} 
                 />
            <div className="container" ref={listRef} >
              <ListItem index= {0} />
              <ListItem index= {1} />
              <ListItem index= {2} />
              <ListItem index= {3} />
              <ListItem index= {4} />
              <ListItem index= {5} />
              <ListItem index= {6} />
              <ListItem index= {7} />
              <ListItem index= {8} />
              <ListItem index= {9} />
              <ListItem index= {10} />
              <ListItem index= {11} />
              
            </div>
            <ArrowForwardIosIcon className="slider right" onClick= {()=> handleClick("right")} />
        </div>
    </div>
  )
}

export default List;