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
                    {/*<p className={'text-2xl'}>{selectedType.number} {selectedType.id} {selectedType.type}</p>*/}
                    {/*<ProneAreas />*/}

                    {/*<div className="grid grid-cols-5 grid-rows-2">*/}
                    {/*    /!* Top Left *!/*/}
                    {/*    <div className="col-span-2 row-span-1 bg-purple_primary" style={{*/}
                    {/*        display: 'flex',*/}
                    {/*        flexDirection: 'column',*/}
                    {/*        justifyContent: 'flex-end',*/}
                    {/*        position: 'relative'*/}
                    {/*    }}>*/}
                    {/*        /!*<img src={storywave2} className='w-full h-48' alt=''*!/*/}
                    {/*        /!*     style={{position: 'absolute', top: 0, left: 0}}/>*!/*/}
                    {/*        <div className={'w-24 my-4 h-32 mx-2 z-10'} style={{position: 'absolute', top: 0, left: 0}}>*/}
                    {/*            <p className='z-10 text-center text-sm'>Story No.</p>*/}
                    {/*            <p className='z-10 my-2 text-center text-l'>{selectedStory.id}</p>*/}
                    {/*        </div>*/}
                    {/*        <img src={bookmark} className='w-24 h-32 mx-2 z-3' alt=''*/}
                    {/*             style={{position: 'absolute', top: 0, left: 0}}/>*/}
                    {/*        <div className="mx-2 mr-4 mb-5 font-sans text-4xl text-white font-black"*/}
                    {/*             style={{alignSelf: 'flex-end'}}>*/}
                    {/*            {selectedStory.title}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}


                    {/*    /!* Top Right *!/*/}
                    {/*    <div className="col-span-3 row-span-1 bg-green-500 brightness-75" style={{*/}
                    {/*        position: 'relative',*/}
                    {/*        background: `url(${selectedStory.mainimage})`,*/}
                    {/*        backgroundSize: 'cover',*/}
                    {/*        backgroundPosition: 'center',*/}
                    {/*        backgroundRepeat: 'no-repeat',*/}
                    {/*    }}>*/}
                    {/*    </div>*/}

                    {/*    <div className="col-span-2 row-span-1">*/}
                    {/*        <div className="mx-auto my-auto h-full flex items-center justify-center flex-col">*/}
                    {/*            <div className="flex my-2 items-center">*/}
                    {/*                <CiCalendarDate className={'text-xl'}/>*/}
                    {/*                <p className="mx-2 text-center">{selectedStory.date}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="flex my-2 items-center">*/}
                    {/*                <IoLocationOutline className={'text-xl'}/>*/}
                    {/*                <p className="mx-2 text-center">{selectedStory.place}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="flex my-2 items-center">*/}
                    {/*                <TbAlertTriangle className={'text-l'}/>*/}
                    {/*                <p className="mx-2 text-center">{selectedStory.type}</p>*/}
                    {/*            </div>*/}

                    {/*            <div className="flex my-2 items-center">*/}
                    {/*                <IoPersonOutline className={'text-l'}/>*/}
                    {/*                <p className="mx-2 text-center">{selectedStory.author}</p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}

                    {/*    /!* Bottom Right *!/*/}
                    {/*    <div className="col-span-3 row-span-1">*/}
                    {/*        <p className={'m-4 mr-6 text-end'}>{selectedStory.para1}</p>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<p className={'mr-6 mx-3 my-2 text-start'}>{selectedStory.para2}</p>*/}

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
                            {selectedStory1 && selectedStory1.map((item, index) => (
                                <Link to={`/Story/${item.id}`}>
                                    <img
                                        key={index}
                                        className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                        src={item.mainimage}
                                        alt='/'
                                    />
                                </Link>
                            ))}
                            {selectedStory1 && selectedStory1.map((item, index) => (
                                <Link to={`/Story/${item.id}`}>
                                    <img
                                        key={index + (selectedStory1.length || 0)}
                                        className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'
                                        src={item.mainimage}
                                        alt='/'
                                    />
                                </Link>
                            ))}
                        </div>
                        <MdChevronRight
                            className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                            onClick={slideRight}
                            size={40}
                        />
                    </div>

                    {/*<div className='relative my-2 flex gap-2 items-center '>
                        <MdChevronLeft
                            className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '
                            onClick={slideLeft}
                            size={40}
                        />*/}

                        {/*<div id='slider'*/}
                        {/*     className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>*/}
                        {/*    /!* Duplicate the slides to create a loop *!/*/}
                        {/*    {selectedStory1.mainimage && selectedStory1.mainimage.map((item, index) => (*/}
                        {/*        <Link to={`/Story/${item.id}`}>*/}
                        {/*            <img*/}
                        {/*                key={index}*/}
                        {/*                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                        {/*                src={item}*/}
                        {/*                alt='/'*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*    {selectedStory1.mainimage && selectedStory1.mainimage.map((item, index) => (*/}
                        {/*        <Link to={`/Story/${item.id}`}>*/}
                        {/*            <img*/}
                        {/*                key={index + (selectedStory1.length || 0)}*/}
                        {/*                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                        {/*                src={item}*/}
                        {/*                alt='/'*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        {/*<div id='slider'*/}
                        {/*     className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>*/}
                        {/*    /!* Duplicate the slides to create a loop *!/*/}
                        {/*    {selectedStory1 && selectedStory1.map((item, index) => (*/}
                        {/*        <Link key={index} to={`/Story/${item.id}`}>*/}
                        {/*            <img*/}
                        {/*                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                        {/*                src={item.mainimage}*/}
                        {/*                alt='/'*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*    {selectedStory1 && selectedStory1.map((item, index) => (*/}
                        {/*        <Link key={index + (selectedStory1.length || 0)} to={`/Story/${item.id}`}>*/}
                        {/*            <img*/}
                        {/*                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                        {/*                src={item.mainimage}*/}
                        {/*                alt='/'*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        {/*<div id='slider'*/}
                        {/*     className='w-screen h-[250px] overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>*/}
                        {/*    /!* Duplicate the slides to create a loop *!/*/}
                        {/*    {selectedStory1.map((item, index) => (*/}
                        {/*        <Link key={index} to={`/Story/${item.id}`}>*/}
                        {/*            <img*/}
                        {/*                className='w-[250px] inline-block mx-1 my-auto p-2 cursor-pointer rounded-2xl hover:scale-105 ease-in-out duration-300'*/}
                        {/*                src={item.mainimage}  // Assuming mainimage is the correct property*/}
                        {/*                alt='/'*/}
                        {/*            />*/}
                        {/*        </Link>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                    {/*    <MdChevronRight*/}
                    {/*        className='opacity-50 cursor-pointer hover:opacity-100 bg-stone-300 rounded-2xl '*/}
                    {/*        onClick={slideRight}*/}
                    {/*        size={40}*/}
                    {/*    />*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
    );
};

export default CategorisedStory;