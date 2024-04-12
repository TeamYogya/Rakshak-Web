import SearchIcon from '../../../assets/img/search.svg'
import NotificationIcon from '../../../assets/img/bell.svg'
import UserIconM from '../../../assets/img/user_icon_m.svg'
const TopBar = () => {
    return(
        <div className={"flex justify-between w-full border-b-2 border-b-light-gray h-14"}>
            <div className={"flex items-center justify-center gap-4 ml-10"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

                <input className={"bg-transparent border-none outline-none placeholder-black"} placeholder={"Search Activities"}/>
            </div>
            <div  className={"flex gap-12 items-center justify-center mr-10"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
</svg>
                <img src={UserIconM} className="w-8 h-8 cursor-pointer" alt={"Notifications Icon"} />
            </div>
        </div>
    )
}

export default TopBar