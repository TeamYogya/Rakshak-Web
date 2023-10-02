import React from 'react';
import {category, Storydetail} from "../TrialJSON/Stories";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import {notfound} from "../TrialJSON/images";

const CategorisedStory = () => {

    const selectedStory = category.find(story => story.id === parseInt(storyId));



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

    return (
        <div>

        </div>
    );
};

export default CategorisedStory;