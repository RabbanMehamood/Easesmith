const TopSection = () => {
  return (
    <div className="flex justify-center mt-4 ">
    <div className="flex justify-center border-b-2 pb-1">
      <img src="/images/search-icon.png" className="w-6 h-6"/>
      <input type="search" id="search" className="pl-2" placeholder="Search Plants"></input>
      <img src="/images/leaf-icon.png" className="ml-2 w-6 h-6"/>
    </div>
    </div>
  );
};

export default TopSection;
