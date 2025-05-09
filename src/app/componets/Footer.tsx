import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">Vedant Steel </h2>
          <div className="flex items-start mb-2">
            <FaUser className="mt-1 mr-2 text-blue-600" />
            <p><strong>Contact Person:</strong><br /> Amrut Sali</p>
          </div>
          <div className="flex items-start mb-2">
            <FaMapMarkerAlt className="mt-1 mr-2 text-blue-600 text-xl" />
            <p>Vedant steel<br /> Nagar Manmad road, Near Hotel Chaitanya Classic, Nagapur, MIDC Area, Ahilyanagar 414111<br />
              <a href="https://maps.app.goo.gl/d839mFZicFDoYHVY7" className="text-blue-600 underline text-sm">Get Directions</a>
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2 text-blue-600" />
            <p><strong>Call Us:</strong> <br />+918983486863</p>
          </div>
        </div>

        {/* Company Profile */}
        <div>
          <h2 className="text-lg font-bold mb-4">Company Profile</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/home" className="hover:underline">Home</a></li>
            <li><a href="/aboutus" className="hover:underline">About Us</a></li>
            <li><a href="/products" className="hover:underline">Our Products</a></li>
            <li><a href="/contactus" className="hover:underline">Contact Us</a></li>
            
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-bold mb-4">Products & Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/products" className="hover:underline">Agriculture goods</a></li>
            <li><a href="/products" className="hover:underline">H R plate</a></li>
            <li><a href="/products" className="hover:underline">Ms Bar</a></li>
            <li><a href="/products" className="hover:underline">Ms Channel</a></li>
            
          </ul>
        </div>

        {/* More Products */}
        <div>
          <h2 className="text-lg font-bold mb-4 invisible md:visible">.</h2>
          <ul className="space-y-2 text-sm mt-4 md:mt-0">
           
            <li><a href="/products" className="hover:underline">Ms Angle</a></li>
            <li><a href="/products" className="hover:underline">Mild Steel Flats</a></li>
            
          </ul>
        </div>
      </div>

      {/* Social + Copyright */}
      <div className="bg-blue-700 text-white text-center px-4 py-6">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="#"><FaFacebookF className="hover:text-gray-200" /></a>
          <a href="#"><FaTwitter className="hover:text-gray-200" /></a>
          <a href="#"><FaLinkedinIn className="hover:text-gray-200" /></a>
        </div>
        <p className="text-sm">&copy; Vedant steel Pvt Ltd. All Rights Reserved (<a href="#" className="underline">Terms of Use</a>)</p>
       
      </div>
    </footer>
  );
}
