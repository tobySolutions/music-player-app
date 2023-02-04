import { useState } from "react";
import useSound from "use-sound"; // to handle the sounds
import Seyi from "../assets/seyi-vibez.mp3";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons"; // for customizing the icons

import AudioTimeLine from "./AudioTimeline";

const albumArt =
  "https://i0.wp.com/justnaija.com/uploads/2022/11/Seyi-Vibez-Bank-Of-America-artwork.png?ulb=false&ssl=1&resize=320,350";


function Player() {
    const [isPlaying, setIsPlaying] = useState(false);

    const [play, { pause, duration, sound }] = useSound(Seyi);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };


  return (
    <div className="component">
      <h2>Playing Now</h2>
      <img className="musicCover" src={albumArt} />
      <div>
        <h3 className="title">Bank Of America</h3>
        <p className="subTitle">Seyi Vibez</p>
      </div>
      <AudioTimeLine duration={duration} sound={sound} isPlaying={isPlaying} />
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default Player