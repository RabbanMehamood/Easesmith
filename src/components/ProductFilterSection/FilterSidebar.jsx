const FilterSidebar = ({ filters }) => {
  return (
    <div className="bg-[#f0ffe5] p-4 w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md text-[#6e6e6e]">Filter</h2>
        <button className="text-sm text-[#6e6e6e] hover:text-gray-700">
          CLEAR ALL
        </button>
      </div>

      <div>
        {filters.map((filter, index) => (
          <div key={index} className="border-t pt-6 pb-2 ">
            <button className="w-full text-left text-[#6e6e6e]">
              {filter} <span className="float-right">+</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
