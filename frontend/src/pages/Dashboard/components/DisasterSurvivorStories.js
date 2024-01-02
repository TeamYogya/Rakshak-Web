import React, {useState} from 'react';
import {BsFilterRight} from "react-icons/bs";
import {category, cities, disasters, Story} from "../TrialJSON/Stories";
import {Dialog, Transition} from '@headlessui/react';
import {AiOutlineClose} from 'react-icons/ai';
import SearchIcon from "../../../assets/img/search.svg";
import {Link, useNavigate} from "react-router-dom";
import {storeToken} from "../../../services/LocalStorageService";
import {useAddStoryMutation} from "../../../services/storyInputApi";


const DisasterSurvivorStories = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDisaster, setSelectedDisaster] = useState('');

    const [stories, setStories] = useState(Story);
    const [showAllStories, setShowAllStories] = useState(false);

    // const handleCityChange = (e) => {
    //     setSelectedCity(e.target.value);
    //     setSelectedDisaster(''); // Reset disaster type when city changes
    //     setShowAllStories(true); // Reset to show all when city changes
    // };

    // const handleDisasterChange = (e) => {
    //     setSelectedDisaster(e.target.value);
    //     setSelectedCity(''); // Reset city when disaster type changes
    //     setShowAllStories(true); // Reset to show all when disaster type changes
    // };

    // Filter stories based on selected city and disaster type

    const filteredStories = stories.filter((story) => {
        const cityMatch = selectedCity === '' || story.city === selectedCity;
        const disasterMatch = selectedDisaster === '' || story.type === selectedDisaster;
        return cityMatch && disasterMatch;
    });

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const [isOpenAddStoryModal, setIsOpenAddStoryModal] = useState(false);

    const openAddStoryModal = () => {
        setIsOpenAddStoryModal(true);
    };

    const closeAddStoryModal = () => {
        setIsOpenAddStoryModal(false);
    };

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const [server_error, setServerError] = useState({})
    const navigate = useNavigate();
    const [addStory, {isLoading}] = useAddStoryMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            title: data.get('title'),
            // type: data.get('type'),
            city: data.get('city'),
            author: data.get('author'),
            date: data.get('date'),
            description: data.get('description'),
        }
        console.log(actualData)
        const res = await addStory(actualData)
        if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error.data.errors)
            setServerError(res.error.data.errors)
        }
        if (res.data) {
            console.log(typeof (res.data))
            console.log(res.data)
            storeToken(res.data.token)
            // navigate('/dashboard')
            navigate('/')
        }
    }

    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [type, setType] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const handleInputChange = (e) => {
        const value = e.target.value;
        const inputName = e.target.name;

        switch (inputName) {
            case 'title':
                setTitle(value);
                break;
            case 'city':
                setCity(value);
                break;
            // case 'type':
            //     setType(value);
            //     break;
            case 'author':
                setAuthor(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'description':
                setDescription(value);
                break;
            default:
                break;
        }
    };

    const [selectedOption, setSelectedOption] = useState('');

    const displayStories = showAllStories ? filteredStories : filteredStories.slice(0, 4);

    return (
        <div className={"w-full"}>

            <div className={"flex items-center justify-between my-5 mx-8"}>
                <div>
                    <p className={"text-left font-sans text-2xl text-neutral-950 font-black"}>Disaster Survivor
                        Stories</p>
                </div>
                <div>
                    <button className="" onClick={openModal}>
                        <h1>
                            <p className={"text-left font-sans text-2xl text-purple_primary font-black"}>
                                <BsFilterRight/>
                            </p>
                        </h1>
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Dialog} onClose={closeModal}>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

                    <div className="flex items-start justify-end mx-4 min-h-screen pr-4 pt-[100px]">
                        <div className="bg-white rounded-2xl p-4 w-50 h-50 relative">
                            <button className="absolute text-xl text-dark_gray font-bold top-0 right-0 p-2"
                                    onClick={closeModal}>
                                <AiOutlineClose className="text-gray-600"/>
                            </button>

                            <Dialog.Title className="text-lg mt-0 font-semibold text-left text-purple_primary mb-4">
                                City
                            </Dialog.Title>
                            <div className="flex items-center">
                                <select
                                    id="cityDropdown"
                                    className="p-2 border-0 rounded"
                                    onChange={handleInputChange}
                                    value={selectedCity}>
                                    <option value="" disabled>
                                        None
                                    </option>
                                    {cities.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <Dialog.Title className="text-lg mt-4 font-semibold text-left text-purple_primary mb-4">
                                Disaster type
                            </Dialog.Title>
                            <div className="flex items-center">
                                <select
                                    id="disasterDropdown"
                                    className="p-2 border-0 rounded"
                                    onChange={handleInputChange}
                                    value={selectedDisaster}>
                                    <option value="" disabled>
                                        None
                                    </option>
                                    {disasters.map((option) => (
                                        <option className={"my-2"} key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button className={"mt-2 mb-0 flex w-full justify-center items-center text-center"}>
                                <img src={SearchIcon} className="w-5 h-5" alt={"Search Icon"}/>
                            </button>
                        </div>
                    </div>
                </div>
            </Transition>


            <div className={"flex items-center justify-between my-5 mx-8"}>
                <div>
                    <p className={"text-left font-sans text-neutral-950 font-black"}>Recommended</p>
                </div>
                <div>
                    <button onClick={() => setShowAllStories(!showAllStories)}>
                        <h1>
                            <p className={"text-left font-sans text-purple_primary font-black"}>
                                {showAllStories ? "All Stories" : "Top Stories"}
                            </p>
                        </h1>
                    </button>
                </div>
            </div>

            <div className='md:flex-row justify-evenly my-5 mx-5'>
                <div className='grid grid-cols-1 max-md:grid-cols-2 lg:grid-cols-4 gap-1'>
                    {displayStories.map((item, index) => (
                        <div key={index}
                             className='flex flex-col rounded-3xl my-2 mx-2 shadow-2xl transition-all ease-in-out hover:scale-105'>
                            <Link to={`/Story/${item.id}`}>
                                <div className='relative'>
                                    <img src={item.image} className='rounded-3xl brightness-50' alt=''/>
                                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-0'>
                                        <div className='flex-col justify-between text-white w-full p-2 mt-auto mb1'>
                                            <div className='font-bold mb-1 flex justify-between items-end'>
                                                <h2 className='text-start mx-2 text-m'>{item.title}</h2>
                                            </div>
                                            <h3 className='text-end text-sm'>{item.date}</h3>
                                            <div>
                                                <h3 className='text-xs text-slate-400'>{item.link}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className={"text-left mt-8 my-5 mx-8 font-sans text-neutral-950 font-black"}>Categorised Stories</p>
            </div>

            <div className='md:flex-row justify-evenly my-5 mx-5'>
                <div className='grid grid-cols-1 max-md:grid-cols-2 lg:grid-cols-4 gap-1'>
                    {category.map((item, index) => (
                        <div key={index}
                             className='flex flex-col rounded-3xl my-2 mx-2 shadow-2xl transition-all ease-in-out hover:scale-105'>
                            <Link to={`/CategorisedStory/${item.type}`}>
                                <div className='relative'>
                                    <img src={item.image} className='rounded-3xl brightness-75' alt=''/>
                                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 p-2'>
                                        <div className='flex-col text-white'>
                                            <div className='font-bold flex justify-between items-end'>
                                                <h2 className='text-start mx-2 text-m'>{item.title}</h2>
                                                <h3 className='text-end text-sm'>{item.number} stories</h3>
                                            </div>
                                            <div>
                                                <h3 className='text-xs text-slate-400'>{item.link}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <Transition appear show={isOpenAddStoryModal} as={Dialog} onClose={closeAddStoryModal}>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30"/>

                    <div className="flex items-start justify-end mx-4 min-h-screen my-4">
                        <div className="bg-white rounded-2xl p-4 w-[974px] relative">
                            <button className="absolute text-xl text-dark_gray font-bold top-0 right-0 p-2"
                                    onClick={closeAddStoryModal}>
                                <AiOutlineClose className="text-gray-600"/>
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap my-2">
                                    <div className="flex flex-col mr-4">
                                        <Dialog.Title
                                            className="text-lg mt-0 font-semibold text-left text-purple_primary my-2">
                                            Title
                                        </Dialog.Title>
                                        <input
                                            className={`p-2 flex my-1 shadow-xl w-48 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-lg 'placeholder:font-black'`}
                                            type="text"
                                            id={'title'}
                                            name="title"
                                            placeholder=""
                                            // value={aadhaar}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-col mr-4">
                                        <Dialog.Title
                                            className="text-lg mt-0 font-semibold text-left text-purple_primary my-2">
                                            City
                                        </Dialog.Title>
                                        <div className="flex items-center">
                                            <select
                                                id="city"
                                                className="p-2 border-0 rounded"
                                                // onChange={handleCityChange}
                                                onChange={handleInputChange}
                                                name={'city'}
                                            >
                                                {/*<option value="" disabled>*/}
                                                {/*    None*/}
                                                {/*</option>*/}
                                                {cities.map((option, index) => (
                                                    <option key={`${option}-${index}`} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/*<div className="flex flex-col mr-4">*/}
                                    {/*    <Dialog.Title*/}
                                    {/*        className="text-lg mt-0 font-semibold text-left text-purple_primary my-2">*/}
                                    {/*        Disaster Type*/}
                                    {/*    </Dialog.Title>*/}
                                    {/*    <div className="flex items-center">*/}
                                    {/*        <select*/}
                                    {/*            id="disasterDropdown"*/}
                                    {/*            className="p-2 border-0 rounded"*/}
                                    {/*            // onChange={handleDisasterChange}*/}
                                    {/*            onChange={handleInputChange}*/}
                                    {/*        >*/}
                                    {/*            name={'type'}*/}
                                    {/*            /!*<option value="">*!/*/}
                                    {/*            /!*    None*!/*/}
                                    {/*            /!*</option>*!/*/}
                                    {/*            {disasters.map((option, index) => (*/}
                                    {/*                <option className="my-2" key={`${option}-${index}`} value={option}>*/}
                                    {/*                    {option}*/}
                                    {/*                </option>*/}
                                    {/*            ))}*/}
                                    {/*            /!*{disasters.map((option) => (*!/*/}
                                    {/*            /!*    <option className={"my-2"} key={option} value={option}>*!/*/}
                                    {/*            /!*        {option}*!/*/}
                                    {/*            /!*    </option>*!/*/}
                                    {/*            /!*))}*!/*/}
                                    {/*        </select>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div className="flex flex-col">
                                        <Dialog.Title
                                            className="text-lg mt-0 font-semibold text-left text-purple_primary my-2">
                                            Author
                                        </Dialog.Title>
                                        <input
                                            className={`p-2 flex my-1 shadow-xl w-48 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-lg 'placeholder:font-black'`}
                                            type="text"
                                            name="author"
                                            placeholder=""
                                            id={'author'}
                                            // value={aadhaar}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <Dialog.Title
                                            className="text-lg mt-0 font-semibold text-left text-purple_primary my-2">
                                            Date
                                        </Dialog.Title>
                                        <input
                                            id={'date'}
                                            className={`p-2 flex my-1 shadow-xl w-48 bg-light-gray placeholder-dark_gray placeholder:font-black rounded-lg 'placeholder:font-black'`}
                                            type="date"
                                            name="date"
                                            placeholder=""
                                            // value={aadhaar}
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                </div>


                                <textarea
                                    id="description"
                                    onChange={handleInputChange}
                                    name="description" rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:out focus:border-black-200 text-black h-[250px]"
                                    placeholder="Give in your story"
                                />

                                {/*<Dialog.Title className="text-lg font-semibold text-left text-purple_primary my-2">*/}
                                {/*    <label htmlFor="photoInput" className="cursor-pointer">*/}
                                {/*        Upload pics*/}
                                {/*    </label>&nbsp;*/}
                                {/*    <label htmlFor="photoInput" className="cursor-pointer text-neutral-950 text-sm">*/}
                                {/*        (The first picture chosen would be the faceof your story)*/}
                                {/*    </label>*/}
                                {/*    <input*/}
                                {/*        type="file"*/}
                                {/*        id="photoInput"*/}
                                {/*        name="photos"*/}
                                {/*        accept="image/*"*/}
                                {/*        multiple*/}
                                {/*        className="mt-4 bg-purple_primary hidden"*/}
                                {/*    />*/}
                                {/*</Dialog.Title>*/}
                                <button type={'submit'}
                                        className="flex p-2 mt-2 shadow-xl w-40 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
                                    Add
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </Transition>

            <div className={'flex justify-end mx-3 my-2'}>
                <button type={'button'} onClick={openAddStoryModal}
                        className="flex p-3 my-4 drop-shadow-lg w-40 text-white bg-purple_primary justify-center font-black rounded-3xl items-center">
                    Add a story
                </button>
            </div>

        </div>
    );
};

export default DisasterSurvivorStories;