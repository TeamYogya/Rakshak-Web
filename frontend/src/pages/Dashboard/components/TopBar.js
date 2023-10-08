import SearchIcon from '../../../assets/img/search.svg'
import NotificationIcon from '../../../assets/img/bell.svg'
import UserIconM from '../../../assets/img/user_icon_m.svg'
const TopBar = () => {
    return(
        <div className={"flex justify-between w-full border-b-2 border-b-light-gray h-14"}>
            <div className={"flex items-center justify-center gap-4 ml-10"}>
                <img src={SearchIcon} className="w-4 h-4" alt={"Search Icon"} />
                <input className={"bg-transparent border-none outline-none placeholder-black"} placeholder={"Search Activities"}/>
            </div>
            <div  className={"flex gap-12 items-center justify-center mr-10"}>
                    <img src={NotificationIcon} className="w-5 h-5 cursor-pointer" alt={"Notifications Icon"} />
                <img src={UserIconM} className="w-8 h-8 cursor-pointer" alt={"Notifications Icon"} />
            </div>
        </div>
    )
}

export default TopBar