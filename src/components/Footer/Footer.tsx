import { NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">About Us</h2>
                        <p className="text-gray-400">
                            Discover luxury and comfort at our hotel. Book your perfect getaway and enjoy world-class services.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt incidunt reiciendis a maiores assumenda fugit.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><NavLink to="/" className="text-gray-400 hover:text-white">Home</NavLink></li>
                            <li><NavLink to="/rooms" className="text-gray-400 hover:text-white">Rooms</NavLink></li>
                            <li><NavLink to="/dining" className="text-gray-400 hover:text-white">Dining</NavLink></li>
                            <li><NavLink to="/contact" className="text-gray-400 hover:text-white">Contact Us</NavLink></li>
                        </ul>
                    </div>

                    {/* Contact Information Section */}
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                        <p className="text-gray-400">123 Hotel St, City, Country</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                        <p className="text-gray-400">Email: info@hotelbooking.com</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400">Follow us:</p>
                    <ul className="flex justify-center space-x-4 mt-2">
                        <li
                             className="text-gray-400 hover:text-white flex items-center hover:cursor-pointer">
                                <FaFacebookF className="mr-1" /> {/* Facebook icon */}
                                Facebook
                           
                        </li>
                        <li
                             className="text-gray-400 hover:text-white flex items-center hover:cursor-pointer">
                                <FaTwitter className="mr-1" /> {/* Twitter icon */}
                                Twitter
                           
                        </li>
                        <li
                             className="text-gray-400 hover:text-white flex items-center hover:cursor-pointer"> {/* Regular link for Instagram */}
                                <FaInstagram className="mr-1" /> {/* Instagram icon */}
                                Instagram
                            
                        </li>
                    </ul>
                </div>


                {/* Footer Bottom */}
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Your Hotel Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
