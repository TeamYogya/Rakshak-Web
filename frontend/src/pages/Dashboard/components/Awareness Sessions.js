import React, { useRef } from 'react';
import intro from "../../Landing/Video/Intro.mp4";

const AwarenessSessions = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 10; // forward 10 seconds
  };

  const handleRewind = () => {
    const video = videoRef.current;
    video.currentTime -= 10; // rewind 10 seconds
  };

  const handleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  return (
    <div className="font-sans">
      <div className="w-full h-[640px] overflow-y-auto grid grid-rows-6">
        <div className="row-span-4 w-full h-full flex justify-center items-center">
          <video
            ref={videoRef}
            className="w-[900px] h-[400px] rounded-3xl object-cover shadow-2xl shadow-black"
          >
            <source src={intro} type="video/mp4" />
          </video>
        </div>
        <div className="row-span-2 w-full h-full flex justify-center px-40">
          <div className="grid grid-cols-12 w-full bg-purple_primary shadow-lg shadow-purple-500/50 h-20 rounded-3xl">
          <div className="col-span-1 w-full h-full flex items-center justify-center">
            <svg onClick={handleRewind} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
          </svg>
          </div>
          <div className="col-span-1 w-full h-full flex items-center justify-center">
            <div onClick={handlePlayPause} className="bg-white shadow-md shadow-white w-14 h-14 flex justify-center items-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
          </svg>
          </div>
          </div>
          <div className="col-span-1 w-full h-full flex items-center justify-center">
            <svg onClick={handleForward} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
            </svg>
          </div>
          <div className="col-span-7 w-full h-full"></div>
          <div className="col-span-1 w-full h-full flex items-center justify-center">
            <svg onClick={handleMute}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
          </div>
          <div className="col-span-1 w-full h-full flex items-center justify-center">
            <svg onClick={handleFullScreen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwarenessSessions;
