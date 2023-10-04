import React, {useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {category, categoryStory, Storydetail} from "../TrialJSON/Stories";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import {notfound} from "../TrialJSON/images";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";

const CategorisedStory = () => {

    const {storyType} = useParams();
    const selectedType = category.filter(story => story.type === storyType);
    // const selectedType = category.reduce((acc, item) => (item.type === storyType ? [...acc, item] : acc), []);
    const selectedStory1 = Storydetail.reduce((acc, item) => (item.type === storyType ? [...acc, item] : acc), []);

    const storyId = selectedType.id;

    //
    console.log('Id is:', storyId, selectedType.number);

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

    if (selectedType.number === 0) {
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

    return (
        <div>
            <div className={"flex font-sans"}>
                <div className={"w-1/5 max-md:w-1/12"}>
                    <Sidebar/>
                </div>
                <div className={"w-4/5 max-md:w-11/12"}>
                    <TopBar/>
                    <p className={'mx-2 my-2 mb-5 font-sans text-start text-3xl font-black'}>Tragic {storyType} Stories
                        in India</p>

                    <p className={'text-2xl'}>{selectedStory1.title} {selectedStory1.type}</p>

                    <div className='relative my-2 mx-1 flex gap-2 items-center '>
                        <MdChevronLeft
                            className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                            onClick={slideLeft}
                            size={40}
                        />
                        <div id='slider'
                             className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>
                            {/* Duplicate the slides to create a loop */}

                            {/*{selectedStory1 && selectedStory1.map((item, index) => (*/}
                            {/*    <Link to={`/Story/${item.id}`}>*/}
                            {/*        <img*/}
                            {/*            key={index}*/}
                            {/*            className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                            {/*            src={item.mainimage}*/}
                            {/*            alt='/'*/}
                            {/*        />*/}
                            {/*        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-0'>*/}
                            {/*            <div className='flex-col justify-between text-white w-full p-2 mt-auto mb1'>*/}
                            {/*                <div className='font-bold mb-1 flex justify-between items-end'>*/}
                            {/*                    <h2 className='text-start mx-2 text-m'>{item.title}</h2>*/}
                            {/*                </div>*/}
                            {/*                <h3 className='text-end text-sm'>{item.date}</h3>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}
                            {/*))}*/}

                            {selectedStory1 && selectedStory1.map((item, index) => (
                                <Link to={`/Story/${item.id}`} key={index} className='relative'>
                                    <img
                                        className='w-[250px] inline-block brightness-50 mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                        src={item.mainimage}
                                        alt='/'
                                    />
                                    <div
                                        className='absolute bottom-0 left-0 right-0 mx-2 bg-black bg-opacity-0 flex flex-col justify-end'>
                                        <div className='text-white w-full p-2'>
                                            <div className='font-bold mb-1 flex justify-between items-end'>
                                                <h2 className='text-start mx-2 text-m'>{item.title}</h2>
                                            </div>
                                            <h3 className='text-end text-sm'>{item.date}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            {selectedStory1 && selectedStory1.map((item, index) => (
                                <Link to={`/Story/${item.id}`} key={index + (selectedStory1.length || 0)}
                                      className='relative'>
                                    <img
                                        className='w-[250px] inline-block brightness-50 mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                        src={item.mainimage}
                                        alt='/'
                                    />
                                    <div
                                        className='absolute bottom-0 left-0 right-0 mx-2 bg-black bg-opacity-0 flex flex-col justify-end'>
                                        <div className='text-white w-full p-2'>
                                            <div className='font-bold mb-1 flex justify-between items-end'>
                                                <h2 className='text-start mx-2 text-m'>{item.title}</h2>
                                            </div>
                                            <h3 className='text-end text-sm'>{item.date}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}


                            {/*{selectedStory1 && selectedStory1.map((item, index) => (*/}
                            {/*    <Link to={`/Story/${item.id}`}>*/}
                            {/*        <img*/}
                            {/*            key={index + (selectedStory1.length || 0)}*/}
                            {/*            className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                            {/*            src={item.mainimage}*/}
                            {/*            alt='/'*/}
                            {/*        />*/}
                            {/*        <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-0'>*/}
                            {/*            <div className='flex-col justify-between text-white w-full p-2 mt-auto mb1'>*/}
                            {/*                <div className='font-bold mb-1 flex justify-between items-end'>*/}
                            {/*                    <h2 className='text-start mx-2 text-m'>{item.title}</h2>*/}
                            {/*                </div>*/}
                            {/*                <h3 className='text-end text-sm'>{item.date}</h3>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}
                            {/*))}*/}


                        </div>
                        <MdChevronRight
                            className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                            onClick={slideRight}
                            size={40}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorisedStory;