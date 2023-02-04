import React, { useEffect, useState } from 'react';


function AudioTimeline({duration, sound, isPlaying}) {
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

    const [time, setTime] = useState({
        min: "",
        sec: "",
    })
    
    const [seconds, setSeconds] = useState(); // current position of the audio in seconds

    
    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        
        setTime({
            min: min,
            sec: secRemain,
        })
    }, [isPlaying])

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // set the seconds state with the current state.
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60)

                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000)
        return () => clearInterval(interval);
    }, [sound])
    return (
        <div>
            <div className="time">
                <p>
                    {currTime.min}:{currTime.sec}
                </p>
                <p>
                    {time.min}:{time.sec}
                </p>
            </div>
            <input
                type="range"
                min="0"
                max={duration / 1000}
                default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                    sound.seek([e.target.value])
                }}
            />
  </div>);
}

export default AudioTimeline