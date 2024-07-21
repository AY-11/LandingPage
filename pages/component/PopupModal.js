import React from 'react'

const PopupModal = ({onClose}) => {
  return (
    <>
       
        <div className="fixed bg-black bg-opacity-50 top-0 right-0 left-0  bottom-0 backdrop-blur-sm flex justify-center items-center">  
           <div>
           <div className="flex justify-end bg-white px-2">
                <button onClick={onClose}className="bg-white hover:bg-red-500 hover:text-white text-black text-xl text-end px-2">X</button>
           </div>
           <div>
            <div className="bg-black text-white">
                <div className="p-2 font-bold text-xl text-center">MENU</div>
                <div className=" flex text-center flex-col font-semibold text-base p-2">
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Dashboard</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Analytics</a>
                
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Slides</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Explore Domain</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Variable Builder</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Knowledge Schedule</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Language</a>
            
                    <a href="" className="hover:cursor-pointer hover:bg-slate-500 rounded-md">Active Log</a>
                </div>
            </div>
            </div>
            </div>
        
        </div>
    </>
  )
}

export default PopupModal