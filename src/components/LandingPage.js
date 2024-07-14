
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import horseLandPageImage from "../assets/images/horse-land-page.jpg";
import horse1 from "../assets/images/horse1.jpg";
import horse2 from "../assets/images/horse2.jpg";
import horse3 from "../assets/images/horse3.jpg";

const LandingPage = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, 50]);
    const y2 = useTransform(scrollY, [0, 300], [0, -50]);
    const y3 = useTransform(scrollY, [0, 300], [0, 100]);
    const yText = useTransform(scrollY, [0, 300], [0, 30]);

    return (
        <div
            style={{ 
                backgroundImage: `url(${horseLandPageImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                height: '80vh'
            }}
            className="relative"
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative z-10 h-full ">
                <div className="grid grid-cols-6 pt-52 px-10">
                    <motion.div 
                        className="text-white lg:pl-16 mt-5 col-span-6 lg:col-span-3"
                        style={{ y: yText }}
                    >
                        <div className="bg-gradient-to-b from-blue-500 via-black to-blue-500 bg-clip-text hover:from-sky-500 hover:to-sky-500 hover:via-black">
                            <h1 className="text-5xl text-transparent font-bold">Welcome to Horse Ride Booking</h1>
                        </div>
                        <p className="text-xs lg:text-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Aliquid perspiciatis esse, accusantium molestiae  <br /> magnam enim iure libero, odio quos  <br /> illo culpa ex est sit!</p>
                    </motion.div>
                    <div className="col-span-3 hidden lg:block">
                        <div className="w-full overflow-x-clip">
                            <motion.img 
                                src={horse3} 
                                alt="horse1" 
                                className="w-[100%] h-[50vh] rounded-md pr-[30%]" 
                                style={{ y: y1 }}
                            />
                            <div>
                                <motion.img 
                                    src={horse2} 
                                    alt="horse2" 
                                    className="w-[90%] h-[40vh] rounded-md -mt-[60vh] ml-[35%]" 
                                    style={{ y: y2 }}
                                />
                                <div>
                                    <motion.img 
                                        src={horse1} 
                                        alt="horse3" 
                                        className="w-[70%] h-[25vh] rounded-md ml-[15%] -mt-[8%]" 
                                        style={{ y: y3 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
