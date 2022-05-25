import React from 'react';
import "../styles/Featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
    
const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
                <select name="genre" id="genre">
                    <option>Genres</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://images.hdqwalls.com/wallpapers/mr-robot-hd-qhd.jpg" alt="featured" />

        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/MR_Robot.svg/2560px-MR_Robot.svg.png" alt="info" />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nam laboriosam voluptatem natus voluptate, possimus iusto molestiae ratione provident maiores impedit quaerat culpa, officia earum cupiditate accusamus blanditiis aspernatur quisquam.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrowIcon />
                    <span>Play</span>
                </button>
                <button className="more-info">
                    <InfoOutlinedIcon />
                    <span>More Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured;