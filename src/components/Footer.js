import React from "react"
import twitter from '../assets/images/twitter.jpg'
import facebook from '../assets/images/facebook.jpg'
import instagram from '../assets/images/insta2.jpg'

const Footer = ()=>{
    return (
        <div className="text-center">

            <footer className=" text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Explore</h2>
                    <ul className="text-gray-400">
                        <li className="mb-2"><a href="#" className="hover:underline">Book a Ride</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Our Horses</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Riding Packages</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
                    </ul>
                </div>


                <div className="text-gray-400">
                    <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                    <p className="mb-2">Email: info@horseridebooking.com</p>
                    <p className="mb-2">Phone: +1 (123) 456-7890</p>
                    <p className="mb-2">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                    <h2 className="text-lg font-semibold mb-4 mt-4">Follow Us</h2>
                    <div className="flex justify-center space-x-4">
                        <div className="flex">
                        <a href="#" className="text-white hover:text-gray-400"> <img src={facebook} alt="" className="w-16 h-16" /> </a>
                        <a href="#" className="text-white hover:text-gray-400"> <img src={instagram} alt="" className="w-10 mt-3 h-10 rounded-full" /></a>
                        <a href="#" className="text-white hover:text-gray-400"> <img src={twitter} alt="" className="w-12 h-12 mt-2" /></a>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Company</h2>
                    <ul className="text-gray-400">
                    <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Career</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li className="mb-2"><a href="#" className="hover:underline">Terms Of Service</a></li>
                    </ul>
                </div>
                </div>

                <div className="mt-12 text-center">
                <p className="text-sm">&copy; 2024 Horse Ride Booking. All Rights Reserved.</p>
                </div>
            </div>
            </footer>

        </div>
    )
}

export default Footer