import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import swimming from '../assets/swimming.png';
import classImg from '../assets/class.png';
import play_ground from '../assets/playground.png';
import addImg from '../assets/bg.png';


const FindUs = () => {
    return (
        <div className="mt-8">
            <h2 className="font-medium mb-5">Find Us On</h2>
            <div className="join inline join-vertical">
                <button className="bg-white w-full btn join-item font-medium"><FaFacebook className="text-blue-500"></FaFacebook> Facebook</button>
                <button className="bg-white w-full btn join-item font-medium"><FaInstagram className="text-red-500"></FaInstagram> Instagram</button>
                <button className="bg-white w-full btn join-item font-medium"><FaLinkedinIn className="text-blue-500"></FaLinkedinIn> Linkedin</button>
            </div>
            <div className="bg-gray-100 my-6 pb-5">
                <h2 className="font-medium mb-5 p-5">Q-Zone</h2>
                <img className="mx-auto" src={swimming} alt="" />
                <img className="mx-auto" src={classImg} alt="" />
                <img className="mx-auto" src={play_ground} alt="" />
            </div>
            <img className="w-full" src={addImg} alt="" />
        </div>
    );
};

export default FindUs;