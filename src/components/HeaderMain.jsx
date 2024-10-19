const HeaderMain = () => {
  return (
    <header className="flex justify-between px-10 items-center py-3">
      <div className="flex items-center">
        <img src="/images/chaperone_logo.png" alt="Logo" className="w-12" />
        <p className="font-bold text-[#0f4811] ml-3">Chaperone</p>
      </div>
      <nav>
        <ul className="flex text-sm font-medium">
          <li className="px-5 text-center">Home</li>
          <li className="px-5 text-[#F3A939] border-b-2 border-[#F3A939] text-center">
            Plants and Pots
          </li>
          <li className="px-5">
            Tools
            <img
              src="/images/down-arrow-5-svgrepo-com.png"
              alt="down-arrow"
              className="w-5 inline"
            />
          </li>
          <li className="px-5">
            Our Services
            <img
              src="/images/down-arrow-5-svgrepo-com.png"
              alt="down-arrow"
              className="w-5 inline"
            />
          </li>
          <li className="px-5">Blog</li>
          <li className="px-5">Our Story</li>
          <li className="px-5">FAQs</li>
        </ul>
      </nav>
      <div className="flex font-medium">
        <div className="flex-col justify-center items-center">
          <img src="/images/user-alt-1-svgrepo-com.png" className="w-5 h-5" />
          <span className="self-center">My Profile</span>
        </div>

        <div>
          <img src="/images/cart-image.png" className="w-5 h-5" />
          <span className="ml-2">Cart</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
