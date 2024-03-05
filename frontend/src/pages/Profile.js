import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileImage from "../assets/profile-image.png"; 

const Profile = () => {
    return (
        <div className="flex justify-center">
        <div className="container mx-auto px-16"> 
            <div className="grid grid-cols-4 gap-8">
                <div className="col-span-1 bg-gray-200 p-4 flex justify-center items-center">
                    <img src={ProfileImage} alt="Profile" className="rounded-md" style={{ width: "105px", height: "99px" }} />
                </div>
                <div className="flex justify-center">
                    <h1>
                    Anita Basudara
                    </h1>

                </div>
                <div className="col-span-3 bg-gray-200 p-4">
                    
                </div>
            </div>
        </div>
    </div>
);
};

export default Profile;
