import {useState} from 'react'
import PopupModal from './PopupModal';

const FrontPage = () => {
    const [show,showPopup] = useState(false);
  return (
    <>
        <div className="flex h-screen">
            
            <div className="w-[300px] overflow-x-auto bg-black text-white lg:block xs:hidden">
                <div className="font-bold text-xl  mx-[50px]  mt-[20px]">
                    <a href="" >Hosty</a>
                </div>
                <div className="mx-[30px] mt-[50px] flex flex-col">
                   <div className="  text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm"><ion-icon name="pie"></ion-icon><a href="" className="ml-[6px]">Dashboard</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="analytics"></ion-icon><a href="" className="ml-[6px]">Analytics</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="apps"></ion-icon><a href="" className="ml-[6px]">Slides</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="search"></ion-icon><a href="" className="ml-[6px]">Explore Domain</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="card"></ion-icon><a href="" className="ml-[6px]">Variable Builder</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="git-pull-request"></ion-icon><a href="" className="ml-[6px]">Knowledge Schedule</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="medical"></ion-icon><a href="" className="ml-[6px]">Language</a></div>
                   <div className="mt-[30px] text-xs sm:text-sm lg:text-base hover:bg-gray-700 p-2 rounded-sm "><ion-icon name="refresh"></ion-icon><a href="" className="ml-[6px]">Active Log</a></div>
                </div>
            </div>
            <div className="w-screen overflow-y-auto mb-5 mx-2">
                <nav className="flex justify-between items-center pt-[16px]">
                    <button onClick={()=>showPopup(true)} className="lg:hidden xs:block">
                        <div className=" bg-black w-8 h-1 mb-1"></div>
                        <div className=" bg-black w-8 h-1 mb-1"></div>
                        <div className=" bg-black w-8 h-1"></div>
                    </button>
                    {show && <PopupModal onClose={()=>showPopup(false)} />}
                    <div className="lg:block xs:hidden"></div>
                    <div>
                        <ul className="flex space-x-6 items-center text-2xl">
                            <li className="hover:cursor-pointer"><ion-icon name="search"></ion-icon></li>
                            <li className="hover:cursor-pointer"><ion-icon name="notifications-outline"></ion-icon></li>
                            <li className="hover:cursor-pointer"><ion-icon name="contact"></ion-icon></li>
                        </ul>
                    </div>
                </nav>

                <div className="font-bold text-xl">Analytics</div>

                <div className=" mt-[40px]">
                    <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2">
                        <button className="border border-black py-1 px-2 rounded-md font-semibold  bg-gray-200 hover:bg-blue-200">Adventure</button>
                        <button className="border border-black py-1 px-2 rounded-md font-semibold  bg-gray-200 hover:bg-blue-200">DOM Usage</button>
                        <button className="border border-black py-1 px-2 rounded-md font-semibold  bg-gray-200 hover:bg-blue-200">Message</button>
                        <button className="border border-black py-1 px-2 rounded-md font-semibold  bg-gray-200 hover:bg-blue-200">Cache</button>
                        <button className="border border-black py-1 px-2 rounded-md font-semibold  bg-gray-200 hover:bg-blue-200">Oris IP</button>
                    </div>

                    <p className="text-base font-bold my-[20px]">Responsive slots</p>

                    <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-8 ">
                        <div className=" bg-blue-200 rounded-md px-6 py-4 hover:cursor-pointer overflow-hidden text-center">
                            <div className="text-xl"><ion-icon name="calendar"></ion-icon></div>
                            <div className="flex space-x-2 justify-center"><p className="text-xl font-bold">45,940</p> <div className="bg-white rounded-sm p-1 overflow-hidden  text-black text-xs"><ion-icon name="trending-up"></ion-icon>5.23%</div></div>
                            <p className="font-semibold">Bandlimits</p>
                        </div>
                        <div className=" bg-green-200 rounded-md px-6 py-4 hover:cursor-pointer overflow-hidden text-center">
                            <div className="text-xl"><ion-icon name="battery-dead"></ion-icon></div>
                            <div className="flex space-x-2 justify-center"><p className="text-xl font-bold">50.1%</p> <div className="bg-white rounded-sm p-1 overflow-hidden text-black text-xs"><ion-icon name="trending-up"></ion-icon>6.73%</div></div>
                            <p className="font-semibold">Exensions date</p>
                        </div>
                        <div className=" bg-orange-200 rounded-md px-6 py-4 hover:cursor-pointer overflow-hidden text-center">
                            <div className="text-xl"><ion-icon name="flask"></ion-icon></div>
                            <div className="flex space-x-2 justify-center"><p className="text-xl font-bold">3,100</p> <div className="bg-white rounded-sm p-1 overflow-hidden text-black text-xs "><ion-icon name="trending-up"></ion-icon>8.09%</div></div>
                            <p className="font-semibold">Errors</p>
                        </div>
                        <div className=" bg-gray-700 rounded-md px-6 py-4 text-white hover:cursor-pointer overflow-hidden text-center">
                            <div className="text-xl "><ion-icon name="stopwatch"></ion-icon></div>
                            <div className="flex space-x-2 justify-center"><p className="text-xl font-bold">36.2%</p> <div className="bg-white rounded-sm p-1 overflow-hidden text-black text-xs"><ion-icon name="trending-up"></ion-icon>1.33%</div></div>
                            <p className="font-semibold">Time online</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-10 ">
                        <div className="col-span-2 border border-black rounded-md overflow-hidden"><img src="1stgraph.png" className="h-full w-full"  /></div>
                        <div className="border border-black rounded-md overflow-hidden"><img src="2ndgraph.jpg" className="h-full"/></div>
                    </div>
                </div>
                
            </div>

        </div>
        <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    </>
  )
}

export default FrontPage;