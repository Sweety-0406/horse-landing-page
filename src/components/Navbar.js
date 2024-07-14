import React from "react"


const NavBar = ()=>{
    return (
        <div>
            <div className=" mx-5 md:mx-20 mb-4 mt-3 ">
                <div>
                    <div className="flex justify-between">
                        <div className=" cursor-pointer ">
                            <h1  className="text-xl font-bold   text-blue-600">Horse Ride Booking</h1>
                            <p className="text-xs -mt-2 text-white md:block">Experience the Adventure</p>
                        </div>
                        <div className="text-white underline underline-offset-2 cursor-pointer">Home</div>
                        <div className="text-gray-400 cursor-pointer">About</div>
                        <div className="text-gray-400 cursor-pointer">Contact</div>
                    </div>
                </div>

            </div>
            <div className="bg-white p-[0.5px]"></div>
        </div>
    )
}

export default NavBar