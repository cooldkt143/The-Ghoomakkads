import React from "react";


const Header = () => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div>
      <>
      {/* Header Section */}
      <header className="fixed top-0 left-0 w-full  bg-gray-800 px-20 py-4 shadow-md">
        <nav className="flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div className="px-8 flex items-center">
            <img src={logo} alt="Ghoomakkads Logo" width="70" height="70" />
            <h1 className="text-2xl text-left font-bold text-white hidden sm:block">Ghoomakkads</h1>
          </div>

          {/* Navigation Menu */}
          <nav className="flex gap-6 lg:gap-10 items-center list-none">
              <a
                onClick={() => navigateTo("Home.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer   "
              >
                Home
              </a>
              <a
                onClick={() => navigateTo("Visited.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer"
              >
                Visited
              </a>
              <a
                onClick={() => navigateTo("WishList.html")}
                className="text-white font-medium hover:underline cursor:pointer text-[18px] cursor-pointer"
              >
                Wishlist
              </a>
            <a onClick={() => navigateTo('Profile.html')} className="cursor-pointer">
                <img src="/images/host1.jpg" alt="Profile" width="40" height="40" className="rounded-full" />
              </a>
          </nav>
        </nav>
      </header>
      </>
    </div>
  );
};

export default Header;
