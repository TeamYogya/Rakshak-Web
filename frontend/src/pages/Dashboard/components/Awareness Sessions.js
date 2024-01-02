import React, { useRef, useState, useEffect } from 'react';

const AwarenessSessions = () => {
    const videoRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [currentVideo, setCurrentVideo] = useState("https://drive.google.com/uc?export=view&id=1YG65pQQSByKBhIMoleS_-XzPHSzxjSck");
    useEffect(() => {
        const video = videoRef.current;
        const updateProgress = () => {
            const currentTime = video.currentTime;
            const duration = video.duration;
            const progressPercentage = (currentTime / duration) * 100;
            setProgress(progressPercentage);
        };

        video.addEventListener('timeupdate', updateProgress);

        return () => {
            video.removeEventListener('timeupdate', updateProgress);
        };
    }, []);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    };
    const changingvideos = (videoSource) => {
        const video = videoRef.current;
        if (video) {
            video.pause();
            video.src = videoSource;
            video.load();
            video.play();
            setCurrentVideo(videoSource);
        }
    };

    const handleForward = () => {
        const video = videoRef.current;
        video.currentTime += 10;
    };

    const handleRewind = () => {
        const video = videoRef.current;
        video.currentTime -= 10;
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
    const handleProgressBarClick = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
        const progressBarWidth = progressBar.clientWidth;
        const seekTime = (clickPosition / progressBarWidth) * videoRef.current.duration;

        videoRef.current.currentTime = seekTime;
        setProgress((seekTime / videoRef.current.duration) * 100);
    };
    return (
        <div className="font-sans">
            {/*<div className="w-full h-[640px] overflow-y-auto grid grid-rows-12 gap-4">*/}
            <div className="w-full h-full grid grid-rows-12 gap-4">
                <div className="row-span-4 w-full h-full flex justify-center items-center">
                    <video onClick={handlePlayPause}
                        ref={videoRef}
                        className="w-[900px] h-[400px] rounded-3xl object-cover shadow-2xl shadow-black"
                    >
                        <source src={currentVideo} type="video/mp4" />
                    </video>
                </div>
                <div className="w-full h-full flex justify-center px-40 items-center">
                    <div className="grid grid-cols-12 w-full bg-purple_primary shadow-lg shadow-purple-500/50 h-20 rounded-3xl">
                        <div className="col-span-1 w-full h-full flex items-center justify-center">
                            <svg onClick={handleRewind} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:fill-white w-8 h-8 text-white duration-1000">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                            </svg>
                        </div>
                        <div onClick={handlePlayPause} className="group col-span-1 w-full h-full flex items-center justify-center rounded-full">
                            <div className="duration-1000 group-hover:bg-white ring-1 ring-white group-hover:ring-black w-14 h-14 flex justify-center items-center rounded-full relative">
                                <div className="duration-1000 group-hover:bg-white group-hover:blur-sm w-14 h-14 flex justify-center items-center rounded-full">

                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="group-hover:fill-black duration-1000 w-8 h-8 text-white group-hover:text-black absolute">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="col-span-1 w-full h-full flex items-center justify-center">
                            <svg onClick={handleForward} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:fill-white w-8 h-8 text-white duration-1000">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                            </svg>
                        </div>
                        <div className="col-span-7 w-full h-full flex items-center justify-center cursor-pointer">
                            <div className="w-full h-4 border-4 border-black rounded-3xl relative" onClick={handleProgressBarClick}>
                                <div
                                    className="h-full bg-white rounded-3xl"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                        <div className="col-span-1 w-full h-full flex items-center justify-center">
                            <svg onClick={handleMute} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:fill-white text-white duration-1000">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                            </svg>
                        </div>
                        <div className="col-span-1 w-full h-full flex items-center justify-center">
                            <svg onClick={handleFullScreen} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="row-span-7 w-full h-full flex justify-center px-40">
                    <div className="w-full h-full grid grid-rows-4 gap-4">
                        <div className="w-full h-full grid grid-cols-9">
                            <div className="col-span-1 w-full h-full flex items-center justify-center">
                                <h className="text-2xl text-gray">01</h>
                            </div>
                            <div className="col-span-2 w-full h-full flex items-center">
                                <video
                                    onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=10eY2J7RHlpqlJ5CPIgPCsboxkSUz3vHh")}
                                    className="w-[200px] h-[100px] rounded-3xl object-cover duration-1000 hover:shadow-2xl hover:shadow-black hover:scale-105 shadow-md shadow-purple-800"
                                >
                                    <source src="https://drive.google.com/uc?export=view&id=10eY2J7RHlpqlJ5CPIgPCsboxkSUz3vHh" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-6 w-full h-full flex items-center justify-center">
                                <h onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=10eY2J7RHlpqlJ5CPIgPCsboxkSUz3vHh")} className="text-lg text-black">Disaster Management Mock Drill Conducted at Arihant Hospital</h>
                            </div>
                        </div>
                        <div className="w-full h-full grid grid-cols-9">
                            <div className="col-span-1 w-full h-full flex items-center justify-center">
                                <h className="text-2xl text-gray">02</h>
                            </div>
                            <div className="col-span-2 w-full h-full flex items-center">
                                <video onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1t-phsRDkc8c3mX2E0V2AvENkfHhm9J-y")}
                                    className="w-[200px] h-[100px] rounded-3xl object-cover duration-1000 hover:shadow-2xl hover:shadow-black hover:scale-105 shadow-md shadow-purple-800"
                                >
                                    <source src="https://drive.google.com/uc?export=view&id=1t-phsRDkc8c3mX2E0V2AvENkfHhm9J-y" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-6 w-full h-full flex items-center justify-center">
                                <h onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1t-phsRDkc8c3mX2E0V2AvENkfHhm9J-y")} className="text-lg text-black">Drop, Cover, and Hold On - Protect Yourself During an Earthquakel</h>
                            </div>
                        </div>
                        <div className="w-full h-full grid grid-cols-9">
                            <div className="col-span-1 w-full h-full flex items-center justify-center">
                                <h className="text-2xl text-gray">03</h>
                            </div>
                            <div className="col-span-2 w-full h-full flex items-center">
                                <video onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1rhAJ6FUs7jk6RFLZBmdfCJ6xE6svX6Cm")}
                                    className="w-[200px] h-[100px] rounded-3xl object-cover duration-1000 hover:shadow-2xl hover:shadow-black hover:scale-105 shadow-md shadow-purple-800"
                                >
                                    <source src="https://drive.google.com/uc?export=view&id=1rhAJ6FUs7jk6RFLZBmdfCJ6xE6svX6Cm" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-6 w-full h-full flex items-center justify-center">
                                <h onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1rhAJ6FUs7jk6RFLZBmdfCJ6xE6svX6Cm")} className="text-lg text-black">Simulation Drill on Flood (Disaster Preparedness)</h>
                            </div>
                        </div>
                        <div className="w-full h-full grid grid-cols-9">
                            <div className="col-span-1 w-full h-full flex items-center justify-center">
                                <h className="text-2xl text-gray">04</h>
                            </div>
                            <div className="col-span-2 w-full h-full flex items-center">
                                <video onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1NGwuLfTgzV8cFe3R-p1vK9T7NZZthF91")}
                                    className="w-[200px] h-[100px] rounded-3xl object-cover duration-1000 hover:shadow-2xl hover:shadow-black hover:scale-105 shadow-md shadow-purple-800"
                                >
                                    <source src="https://drive.google.com/uc?export=view&id=1NGwuLfTgzV8cFe3R-p1vK9T7NZZthF91" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-6 w-full h-full flex items-center justify-center">
                                <h onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1NGwuLfTgzV8cFe3R-p1vK9T7NZZthF91")} className="text-lg text-black">Fire Mock Drill | Code Red | Lisie Hospital</h>
                            </div>
                        </div>
                        <div className="w-full h-full grid grid-cols-9">
                            <div className="col-span-1 w-full h-full flex items-center justify-center">
                                <h className="text-2xl text-gray">05</h>
                            </div>
                            <div className="col-span-2 w-full h-full flex items-center">
                                <video
                                    onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1YG65pQQSByKBhIMoleS_-XzPHSzxjSck")}
                                    className="w-[200px] h-[100px] rounded-3xl object-cover duration-1000 hover:shadow-2xl hover:shadow-black hover:scale-105 shadow-md shadow-purple-800"
                                >
                                    <source src="https://drive.google.com/uc?export=view&id=1YG65pQQSByKBhIMoleS_-XzPHSzxjSck" type="video/mp4" />
                                </video>
                            </div>
                            <div className="col-span-6 w-full h-full flex items-center justify-center">
                                <h onClick={() => changingvideos("https://drive.google.com/uc?export=view&id=1YG65pQQSByKBhIMoleS_-XzPHSzxjSck")} className="text-lg text-black">Disaster Management Mock Drill Conducted at Yashodha Hospital</h>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwarenessSessions;
