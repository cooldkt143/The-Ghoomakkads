import { useState } from "react";
import prof2 from "../assets/images/prof2.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";
import post4 from "../assets/images/post4.jpg";
import reels1 from "../assets/images/reels1.jpg";
import reels2 from "../assets/images/reels2.gif";
import reels3 from "../assets/images/reels3.jpg";
import tagged1 from "../assets/images/tagged1.jpg";
import tagged2 from "../assets/images/tagged2.jpg";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");
  const [isDarkMode, setDarkMode] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const tabs = ["posts", "reels", "saved"];

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const tabImages = {
    posts: [post2, post3, post4],
    reels: [reels1, reels2, reels3],
    saved: [tagged1, tagged2],
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white`}>
      <div className="max-w-5xl mx-auto p-5">
        <header className="flex flex-col md:flex-row items-center mb-6">
          <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-gray-300">
            <img src={prof2} alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 text-center md:text-left mt-4 md:mt-0 md:ml-6">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Vanella Markus</h1>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-300">@vanel</p>
            <div className="text-xl flex gap-6 justify-center md:justify-start mt-2">
              <span><strong>200</strong> posts</span>
              <span><strong>1.5M</strong> followers</span>
              <span><strong>180</strong> following</span>
            </div>
            <button className="mt-3 text-2xl bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 ">
              Edit Profile
            </button>
          </div>
        </header>

        {/* Tabs */}
        <nav className="border-b border-gray-300 dark:border-gray-700 mb-4">
          <ul className="flex justify-center gap-6">
            {tabs.map((tab) => (
              <li
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-2xl cursor-pointer pb-2 font-semibold capitalize ${
                  activeTab === tab
                    ? "border-b-2 border-blue-500 text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {tab}
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {tabImages[activeTab].map((imgSrc, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow cursor-pointer"
              onClick={() => openModal(imgSrc)}
            >
              <img src={imgSrc} alt={`Preview ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <span
            className="absolute top-5 right-10 text-white text-4xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <img src={modalImage} alt="Modal" className="max-w-3xl w-full" />
        </div>
      )}
    </div>
  );
}
