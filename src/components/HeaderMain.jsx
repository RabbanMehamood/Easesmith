const HeaderMain = () => {
  return (
    <header className="flex justify-between px-10 items-center py-3">
      <div className="flex items-center">
        <img src="/images/chaperone_logo.png" alt="Logo" className="w-10" />
        <p className="font-semibold text-[#0f4811] ml-3">Chaperone</p>
      </div>
      <nav>
        <ul className="flex text-sm font-medium">
          <li className="pl-8">Home</li>
          <li className="pl-8">Plants and Pots</li>
          <li className="pl-8">Tools</li>
          <li className="pl-8">Our Services</li>
          <li className="pl-8">Blog</li>
          <li className="pl-8">Our Story</li>
          <li className="pl-8">FAQs</li>
        </ul>
      </nav>
      <div className="flex font-medium justify-items-center">
        <div className="flex-row justify-center items-center">
            <img src="/images/profile.256x256.png" className="w-5 h-5"/>
            <span className="self-center">My Profile</span></div>
        
        <div>
            <img src="/images/cart-image.png" className="w-5 h-5"/>
            <span className="ml-2">Cart</span>
            </div>
      </div>
    </header>
  );
};

export default HeaderMain;
