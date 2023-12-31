import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Storydetail} from '../TrialJSON/Stories';
import {bookmark, notfound, storywave, storywave2} from "../TrialJSON/images";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import DisasterSurvivorStories from "./DisasterSurvivorStories";
import {CiCalendarDate} from "react-icons/ci";
import {IoLocationOutline, IoPersonOutline} from "react-icons/io5";
import {TbAlertTriangle} from "react-icons/tb";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";


const Story = () => {
    const {storyId} = useParams();
    console.log('Id is:', storyId);
    const selectedStory = Storydetail.find(story => story.id === parseInt(storyId));

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft -= 260;

        // If the slider reaches the beginning, jump to the last slide to create a loop effect
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth;
        }
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft += 260;

        // If the slider reaches the end, jump to the first slide to create a loop effect
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (!selectedStory) {
        return (
            <div className={"flex font-sans"}>
                <div className={"w-1/5 max-md:w-1/12"}>
                    <Sidebar/>
                </div>
                <div className={"w-4/5 max-md:w-11/12"}>
                    <TopBar/>
                    {/*<ProneAreas />*/}
                    <img src={notfound} className="h-[450px] mx-auto my-auto" alt="Search Icon"/>
                    <div>
                        <p className={"text-center mx-8 text-xl font-sans text-neutral-950 font-black"}>Story not
                            found</p>
                        <p className={"text-center mx-8 my-1 text-sm font-sans text-neutral-950 font-black"}>The story
                            might be
                            removed by author due to personal reasons. You may come back later, to check if the author
                            re
                            uploaded the story or not.</p>
                    </div>
                </div>
            </div>
        );
    }

    console.log(selectedStory.title);

    return (

        <div className={"flex font-sans"}>
            <div className={"w-1/5 max-md:w-1/12"}>
                <Sidebar/>
            </div>
            <div className={"w-4/5 max-md:w-11/12"}>
                <TopBar/>
                {/*<ProneAreas />*/}

                <div className="grid grid-cols-5 grid-rows-2">
                    {/* Top Left */}
                    <div className="col-span-2 row-span-1 bg-purple_primary" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        position: 'relative'
                    }}>
                        {/*<img src={storywave2} className='w-full h-48' alt=''*/}
                        {/*     style={{position: 'absolute', top: 0, left: 0}}/>*/}
                        <div className={'w-24 my-4 h-32 mx-2 z-10'} style={{position: 'absolute', top: 0, left: 0}}>
                            <p className='z-10 text-center text-sm'>Story No.</p>
                            <p className='z-10 my-2 text-center text-l'>{selectedStory.id}</p>
                        </div>
                        <img src={bookmark} className='w-24 h-32 mx-2 z-3' alt=''
                             style={{position: 'absolute', top: 0, left: 0}}/>
                        <div className="mx-2 mr-4 mb-5 font-sans text-4xl text-white font-black"
                             style={{alignSelf: 'flex-end'}}>
                            {selectedStory.title}
                        </div>
                    </div>


                    {/* Top Right */}
                    <div className="col-span-3 row-span-1 bg-green-500 brightness-75" style={{
                        position: 'relative',
                        background: `url(${selectedStory.mainimage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    </div>

                    <div className="col-span-2 row-span-1">
                        <div className="mx-auto my-auto h-full flex items-center justify-center flex-col">
                            <div className="flex my-2 items-center">
                                <CiCalendarDate className={'text-xl'}/>
                                <p className="mx-2 text-center">{selectedStory.date}</p>
                            </div>

                            <div className="flex my-2 items-center">
                                <IoLocationOutline className={'text-xl'}/>
                                <p className="mx-2 text-center">{selectedStory.place}</p>
                            </div>

                            <div className="flex my-2 items-center">
                                <TbAlertTriangle className={'text-l'}/>
                                <p className="mx-2 text-center">{selectedStory.type}</p>
                            </div>

                            <div className="flex my-2 items-center">
                                <IoPersonOutline className={'text-l'}/>
                                <p className="mx-2 text-center">{selectedStory.author}</p>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Right */}
                    <div className="col-span-3 row-span-1">
                        <p className={'m-4 mr-6 text-end'}>{selectedStory.para1}</p>
                    </div>
                </div>
                <p className={'mr-6 mx-3 my-2 text-start'}>{selectedStory.para2}</p>

                <div className='relative my-2    flex gap-2 items-center '>
                    <MdChevronLeft
                        className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                        onClick={slideLeft}
                        size={40}
                    />
                    <div id='slider'
                         className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>
                        {/* Duplicate the slides to create a loop */}
                        {selectedStory.images.map((item, index) => (
                            <img
                                key={index}
                                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                src={item}
                                alt='/'
                            />
                        ))}
                        {selectedStory.images.map((item, index) => (
                            <img
                                key={index + selectedStory.images.length}
                                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                src={item}
                                alt='/'
                            />
                        ))}
                    </div>
                    <MdChevronRight
                        className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                        onClick={slideRight}
                        size={40}
                    />
                </div>

            </div>
        </div>

    );
};

export default Story;
